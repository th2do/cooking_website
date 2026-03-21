const sidebar = document.getElementById('sidebar');
const dragHandle = document.getElementById('dragHandle');
const listElement = document.getElementById('recipe-list');
const welcomeScreen = document.getElementById('main-page-welcome');
const recipeDetailsContainer = document.getElementById('recipe-details-container');
const searchInput = document.getElementById('recipe-search');
const clearSearchBtn = document.getElementById('clear-search');

let currentActiveId = "home";
let currentSearchTerm = "";
let selectedTags = new Set();

// --- FLEXIBLE MULTI-TERM SEARCH LOGIC ---
function getFilteredRecipes() {
    let keywords = [];
    const term = currentSearchTerm.trim().toLowerCase();

    if (term !== "") {
        // If there's a comma, split by comma. Otherwise, split by space.
        if (term.includes(',')) {
            keywords = term.split(',').map(k => k.trim()).filter(k => k !== "");
        } else {
            keywords = term.split(/\s+/).filter(k => k !== "");
        }
    }

    return Object.keys(recipeDB).filter(key => {
        const recipe = recipeDB[key];

        // 1. All keywords must match (Title, Tags, or Ingredients)
        const matchesText = keywords.length === 0 || keywords.every(kw => {
            return recipe.title.toLowerCase().includes(kw) ||
                recipe.tags.some(t => t.toLowerCase().includes(kw)) ||
                recipe.ingredients.some(ing => ing.toLowerCase().includes(kw));
        });

        // 2. Must match ALL selected tags
        const matchesTags = selectedTags.size === 0 ||
            Array.from(selectedTags).every(tag => recipe.tags.includes(tag));

        return matchesText && matchesTags;
    });
}

function toggleTag(tag) {
    if (selectedTags.has(tag)) {
        selectedTags.delete(tag);
    } else {
        selectedTags.add(tag);
    }
    clearSearchBtn.classList.toggle('hidden', currentSearchTerm.trim() === "" && selectedTags.size === 0);
    updateSidebar();
    if (currentActiveId !== "home") loadRecipe(currentActiveId);
}

function loadRecipe(recipeId) {
    const recipe = recipeDB[recipeId];
    if (!recipe) return;

    welcomeScreen.classList.add('hidden');
    recipeDetailsContainer.classList.remove('hidden');
    document.getElementById('recipe-display').scrollTop = 0;

    recipeDetailsContainer.innerHTML = `
        <div class="recipe-header">
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-main-img">
            <div class="recipe-header-text">
                <div class="tag-container">
                    ${recipe.tags.map(t => {
        const isActive = selectedTags.has(t) ? 'active-filter' : '';
        return `<span class="tag ${isActive}" onclick="toggleTag('${t}')">${t}</span>`;
    }).join('')}
                </div>
                <h1>${recipe.title}</h1>
                <p class="recipe-description">${recipe.description}</p>
            </div>
        </div>
        <div class="recipe-body">
            <div class="ingredients-section">
                <h3>Ingredients</h3>
                <ul class="ingredients-list">${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
            </div>
            <div class="method-section">
                <h3>Method</h3>
                <ol class="method-list">${recipe.instructions.map(step => `<li>${step}</li>`).join('')}</ol>
            </div>
        </div>
    `;
}

function updateSidebar() {
    listElement.innerHTML = '';

    if (selectedTags.size > 0) {
        const info = document.createElement('div');
        info.className = 'filter-info';
        info.innerText = `Filters: ${Array.from(selectedTags).join(', ')}`;
        listElement.appendChild(info);
    }

    if (currentSearchTerm.trim() === "" && selectedTags.size === 0) {
        const homeLi = document.createElement('li');
        homeLi.className = currentActiveId === "home" ? 'active-bookmark' : '';
        homeLi.innerHTML = `<span class="bookmark-icon">🏠</span> Chào mừng`;
        homeLi.onclick = () => {
            currentActiveId = "home";
            welcomeScreen.classList.remove('hidden');
            recipeDetailsContainer.classList.add('hidden');
            updateSidebar();
        };
        listElement.appendChild(homeLi);
    }

    const filteredKeys = getFilteredRecipes();
    filteredKeys.forEach((key, index) => {
        const recipe = recipeDB[key];
        const li = document.createElement('li');
        li.className = currentActiveId === key ? 'active-bookmark' : '';
        li.style.animationDelay = `${index * 0.05}s`;
        li.innerHTML = `<span class="bookmark-icon">🔖</span> ${recipe.title}`;
        li.onclick = () => {
            currentActiveId = key;
            loadRecipe(key);
            updateSidebar();
        };
        listElement.appendChild(li);
    });

    if (filteredKeys.length === 0) {
        const empty = document.createElement('li');
        empty.style.opacity = '0.5';
        empty.innerText = "No matching recipes...";
        listElement.appendChild(empty);
    }
}

searchInput.addEventListener('input', (e) => {
    currentSearchTerm = e.target.value;
    clearSearchBtn.classList.toggle('hidden', currentSearchTerm.trim() === "" && selectedTags.size === 0);
    updateSidebar();
});

clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    currentSearchTerm = '';
    selectedTags.clear();
    clearSearchBtn.classList.add('hidden');
    updateSidebar();
    searchInput.focus();
});

dragHandle.addEventListener('mousedown', (e) => {
    e.preventDefault();
    document.body.classList.add('resizing');
    const doDrag = (e) => { sidebar.style.width = `${e.clientX}px`; };
    const stopDrag = () => {
        document.body.classList.remove('resizing');
        document.removeEventListener('mousemove', doDrag);
        document.removeEventListener('mouseup', stopDrag);
    };
    document.addEventListener('mousemove', doDrag);
    document.addEventListener('mouseup', stopDrag);
});

updateSidebar();