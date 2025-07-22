const books = {
    fiction: [
        { title: 'The Great Gatsby', description: 'A story about the American dream.', cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/640px-The_Great_Gatsby_Cover_1925_Retouched.jpg', link: 'https://www.amazon.com/The-Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567' },
        { title: '1984', description: 'A dystopian novel about surveillance and control.', cover: 'https://m.media-amazon.com/images/I/41NuANoS1yL._SY445_SX342_.jpg', link: 'https://www.amazon.com/1984-George-Orwell/dp/0451524934' }
    ],
    mystery: [
        { title: 'The Da Vinci Code', description: 'A thrilling mystery about a hidden secret.', cover: 'https://www.thekirkwoodcall.com/wp-content/uploads/2018/11/davinci-1-594x900.jpg', link: 'https://www.amazon.com/Da-Vinci-Code-Dan-Brown/dp/0307474275' },
        { title: 'Gone Girl', description: 'A suspenseful tale of a missing wife and dark secrets.', cover: 'https://m.media-amazon.com/images/I/713e4Yk6brL._SL1500_.jpg', link: 'https://www.amazon.com/Gone-Girl-Gillian-Flynn/dp/0307588378' }
    ],
    fantasy: [
        { title: 'Harry Potter', description: 'A young wizard’s journey through magical adventures.', cover: 'https://m.media-amazon.com/images/I/51fLJOHOJFL._SY445_SX342_.jpg', link: 'https://www.amazon.com/Harry-Potter-Sorcerers-Stone/dp/059035342X' },
        { title: 'The Hobbit', description: 'A quest to reclaim a stolen treasure.', cover: 'https://m.media-amazon.com/images/I/418jD+Rsd5L._SY445_SX342_.jpg', link: 'https://www.amazon.com/Hobbit-Lord-Rings-J-R-R-Tolkien/dp/054792822X' }
    ],
    history: [
        { title: 'The Rise and Fall of the Third Reich: A History of Nazi Germany.', description: 'A gripping account of Nazi Germany’s rise to power and its devastating fall.', cover: 'https://m.media-amazon.com/images/I/81DseU8Ny-L._AC_UY327_FMwebp_QL65_.jpg', link: 'https://www.amazon.com/Rise-Fall-Third-Reich-History/dp/B003X4R6GQ/ref=sr_1_1' },
        { title: 'Gods Guns & Missionaries.', description: 'A sharp look at how colonialism and missionaries reshaped Hinduism.', cover: 'https://m.media-amazon.com/images/I/91r80p8CCgL._SY522_.jpg', link: 'https://www.amazon.com/Gods-Guns-Missionaries-Making-Identity/dp/0670093653/ref=sr_1_1' }
    ],
    literature: [
        { title: ' Pride and Prejudice by Jane Austen', description:'A witty and romantic tale of manners, marriage, and misunderstandings in 19th-century England.', cover: 'https://m.media-amazon.com/images/I/41oN+kIsDzL._SX342_SY445_.jpg', link: 'https://www.amazon.in/Pride-Prejudice-Deluxe-Hardbound-Austen/dp/938777967X/ref=sr_1_2_sspa' },
        { title: '- To Kill a Mockingbird ', description: 'A powerful story of justice and morality told through the eyes of a young girl in the racially divided American South.', cover: 'https://m.media-amazon.com/images/I/91REf0GGuiL._SL1500_.jpg', link: 'https://www.amazon.in/Kill-Mockingbird-Graphic-Novel/dp/178515155X/ref=sr_1_2' }
    ],
    comedy: [
        { title: 'Bunco', description:'A Comedy About The Drama Of Friendship', cover: 'https://m.media-amazon.com/images/I/81dJFaEFFML._SY425_.jpg', link: 'https://www.amazon.com/Bunco-Comedy-About-Drama-Friendship-ebook/dp/B08FZTB2ZD/ref=sr_1_2' },
        { title: 'Grave Humor', description: 'A Magical Romantic Comedy', cover: 'https://m.media-amazon.com/images/I/91gO4YY9tHL._SY522_.jpg', link:'https://www.amazon.in/Grave-Humor-Magical-Romantic-Comedy-ebook/dp/B07XB3B21K/ref=sr_1_5' }
    ],
    
    "non-fiction": [
        { title: 'Sapiens', description: 'A history of humankind.', cover: 'https://m.media-amazon.com/images/I/51Pe5D36rML._SY445_SX342_.jpg', link: 'https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316095' },
        { title: 'Educated', description: 'A memoir of a girl who escapes her strict upbringing.', cover: 'https://m.media-amazon.com/images/I/71-4MkLN5jL._SY522_.jpg', link: 'https://www.amazon.com/Educated-Memoir-Tara-Westover/dp/0399590501' }
    ],
    horror: [
        { title: 'The Haunting of Hill House.', description: 'A classic haunted house tale where fear, madness, and mystery collide.', cover: 'https://m.media-amazon.com/images/I/71bQxl32oUL._AC_UY327_FMwebp_QL65_.jpg', link:'https://www.amazon.com/Haunting-Hill-House-Shirley-Jackson-ebook/dp/B0F1R9XXKG/ref=sr_1_1'},
        { title: 'Bird Box.', description: 'Bird Box is a haunting thriller where opening your eyes can kill you, and survival means facing fear blindfolded.', cover:'https://m.media-amazon.com/images/I/51n1PFY9P4L._AC_UY327_FMwebp_QL65_.jpg',link:'https://www.amazon.com/Bird-Box-Josh-Malerman-2015-01-29/dp/B0182PXR22/ref=sr_1_2'}
    ],
    love:[
        { title: 'Can We Be Strangers Again?', description: 'A moving tale of love, loyalty and the bittersweet beauty of letting go', cover: 'https://m.media-amazon.com/images/I/71zpck45b2L._SY522_.jpg', link:'https://www.amazon.in/Can-We-Strangers-Again-bittersweet/dp/0143475924/ref=sr_1_3'},
        { title: 'Divine Union.', description: 'The Eternal Love Story of Shiva and Parvati ', cover:'https://m.media-amazon.com/images/I/61GycimlaeL._SY522_.jpg',link:'https://www.amazon.in/Divine-Union-Eternal-Story-Parvati/dp/B0D697MNGS/ref=sr_1_4'}
    ],
    action: [
        { title: 'Treasure Island.', description: 'A classic pirate adventure that has captivated readers for generations.', cover: 'https://m.media-amazon.com/images/I/81IeKg6N2-L._SL1500_.jpg', link:'https://www.amazon.in/Treasure-Island-Penguin-Classics-Stevenson/dp/0140437681'},
        { title: 'The Count of Monte Cristo.', description: 'A tale of an innocent man wrongfully imprisoned who seeks revenge.', cover:'https://m.media-amazon.com/images/I/81cHjc6E43L._SY425_.jpg',link:'https://www.amazon.in/Count-Monte-Cristo-Alexandre-Dumas/dp/8175993677/ref=sr_1_1_sspa'}
    ],
    "self-help": [
        { title: 'Atomic Habits', description: 'How small habits can lead to remarkable changes.', cover: 'https://m.media-amazon.com/images/I/419CqGgAdZL._SY445_SX342_.jpg', link: 'https://www.amazon.com/Atomic-Habits-James-Clear/dp/0735211299' },
        { title: 'The Power of Now', description: 'A guide to spiritual enlightenment and mindfulness.', cover: 'https://m.media-amazon.com/images/I/61Ij8nLooNL._SY522_.jpg', link: 'https://www.amazon.com/Power-Now-Guide-Spiritual-Enlightenment/dp/1577314808' }
    ]
};

function showRecommendations() {
    const category = document.getElementById('category').value;
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    if (category && books[category]) {
        books[category].forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');

            bookCard.innerHTML = `
                        <a href="${book.link}" target="_blank">
                            <img src="${book.cover}" alt="${book.title}">
                            <h3>${book.title}</h3>
                            <p>${book.description}</p>
                        </a>
                    `;
            bookList.appendChild(bookCard);
        });
    }
}
