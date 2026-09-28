const TAGS = {
    SEAFOOD: "Seafood",
    QUICK: {
        SHORT: "15-30 min"
    },
    ITALIAN: "Italian",
    FRIED: "Fried",
    LONG: "1-3 hours",
    NUOC_CHAM: "Nước chấm",
    HAI_PHONG: "Hải Phòng",
};

const recipeDB = {
    "salmon": {
        title: "Honey Glazed Salmon",
        description: "A quick, sweet, and savory dish, perfect for a busy week night meal.",
        image: "honey_garlic_salmon.jpg",
        tags: [TAGS.SEAFOOD, TAGS.QUICK.SHORT],
        ingredients: [
            "Salmon Fillets",
            "Salt",
            "Pepper",
            "Garlic Powder",
            "Paprika",
            "Oregano Leaves",
            "Parsley",
            "Lemon Juice"
        ],
        instructions: [
            "Scale salmon skin",
            "Season salmon fillets with salt, pepper, garlic powder, paprika, oregano leaves, parsley",
            "Squeeze some lemon juice",
            "Air-fry for 10-15 min at 370F",
            "Serve with rice or spaghetti"
        ]
    },
    "Spaghetti": {
        title: "Italian Spaghetti",
        description: "A flavourful, simple Italian recipe for a week night",
        image: "spaghetti.jpg",
        tags: [TAGS.ITALIAN, TAGS.QUICK.SHORT],
        ingredients: [
            "Spaghetti",
            "Lean Ground Beef",
            "Onion",
            "Garlic",
            "Cherry Tomatoes",
            "Salt",
            "Pepper",
            "Paprika",
            "Oregano Leaves",
            "Parsley",
            "Butter",
            "Cream",
            "Basil tomatoe sauce"
        ],
        instructions: [
            "Salt water and boil spaghetti",
            "Chop onions, garlic, and stir fry",
            "Put cherry tomatoes in and cover with a lid",
            "Crush tomatoes, and stir fry ground beef",
            "Season with salt, pepper, paprika, oregano leaves, parsley",
            "Pour basil tomatoe sauce and a bit of spaghetti boiling water",
            "Put butter and cream",
            "Mix the sauce and wait for sauce to simmer and thicken",
            "Mix the sauce with spaghetti"
        ]
    },
    "Chả Nem": {
        title: "Chả Nem",
        description: "Món ngon cho cuối tuần nhiều thời gian ăn kèm bún nước mắm",
        image: "cha_nem.jpg",
        tags: [TAGS.FRIED, TAGS.LONG, TAGS.NUOC_CHAM, TAGS.HAI_PHONG],
        ingredients: [
            "Cua Bể (optional)",
            "Tôm",
            "Thịt băm",
            "Mộc nhĩ",
            "Nấm hương",
            "Miến",
            "Cà rốt",
            "Giá đỗ",
            "Trứng gà (optional)",
            "Tiêu",
            "Súp",
            "Dầu ăn",
            "Vỏ bánh đa gói"

        ],
        instructions: [
            "Ngâm mộc nhĩ, nấm hương, và miến vào nước trước và thái miếng nhỏ. Nấm cắt chân",
            "Tôm lấy chỉ lưng thái miếng nhỏ",
            "Nạo sợi nhỏ cà rốt và rửa giá đỗ",
            "Trộn thịt, tôm, mộc nhĩ, nấm hương, miến, cà rốt, giá đỗ. Nêm với ít tiêu và súp",
            "Pha ít nước với chanh để thấm vỏ bánh đa và gói lại",
            "Bắc chảo làm nóng dầu rồi rán sơ qua cho giòn",
            "Nếu ăn liền thì rán chín vàng",
            "Nếu để tủ đông thì rán sơ giòn bỏ ra và để tủ đông. Khi cần thì lấy ra để Air Fryer 380F trong 15 phút lật hai mặt"
        ]
    },
    "Nước Mắm (trộn)": {
        title: "Nước Mắm (trộn)",
        description: "Nước chấm để trộn với bún hoặc ăn cùng chả nem",
        image: "nuoc_mam.jpg",
        tags: [TAGS.NUOC_CHAM, TAGS.QUICK.SHORT],
        ingredients: [
            "Nước mắm",
            "Giấm (gạo hoặc táo) or Chanh",
            "Đường",
            "Tỏi",
            "ớt"
        ],
        instructions: [
            "Băm nhỏ tỏi và ớt",
            "Pha theo tỉ lệ 3 nước (nước nóng để nguội ấm) - 1 mắm - ¼ giấm hoặc ½ chanh - 1 đường và thả tỏi ớt băm vào"
        ]
    },
};
