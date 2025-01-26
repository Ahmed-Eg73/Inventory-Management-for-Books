// Sample data structure
const inventory = [
  {
    category: "Informacinės technologijos",
    books: [
      {
        title: "Programavimas linksmai",
        ISBN: "IT-12345",
        publishing_year: 2021,
        pages: 250,
        quantity: 12,
        price: 25,
      },
      {
        title: "Web Development Basics",
        ISBN: "IT-12346",
        publishing_year: 2023,
        pages: 300,
        quantity: 5,
        price: 30,
      }, // New book
      {
        title: "JavaScript for Beginners",
        ISBN: "IT-12347",
        publishing_year: 2021,
        pages: 200,
        quantity: 8,
        price: 30,
      }, // New book
      {
        title: "Advanced CSS Techniques",
        ISBN: "IT-12348",
        publishing_year: 2021,
        pages: 350,
        quantity: 10,
        price: 35,
      },
      {
        title: "Database Management Systems",
        ISBN: "IT-12349",
        publishing_year: 2022,
        pages: 400,
        quantity: 7,
        price: 40,
      },
    ],
  },
  {
    category: "Fantastika",
    books: [
      {
        title: "The Hobbit",
        ISBN: "F-12345",
        publishing_year: 2021,
        pages: 310,
        quantity: 15,
        price: 18,
      },
      {
        title: "Dune",
        ISBN: "F-12346",
        publishing_year: 2020,
        pages: 412,
        quantity: 6,
        price: 22,
      },
      {
        title: "Neuromancer",
        ISBN: "F-12347",
        publishing_year: 2005,
        pages: 271,
        quantity: 9,
        price: 20,
      },
      {
        title: "The Name of the Wind",
        ISBN: "F-12348",
        publishing_year: 2007,
        pages: 662,
        quantity: 4,
        price: 30,
      },
      {
        title: "The Fifth Season",
        ISBN: "F-12349",
        publishing_year: 2015,
        pages: 512,
        quantity: 11,
        price: 25,
      },
    ],
  },
  {
    category: "Historical Fiction",
    books: [
      {
        title: "The Book Thief",
        ISBN: "HF-12345",
        publishing_year: 2005,
        pages: 552,
        quantity: 14,
        price: 15,
      },
      {
        title: "All the Light We Cannot See",
        ISBN: "HF-12346",
        publishing_year: 2014,
        pages: 531,
        quantity: 5,
        price: 28,
      },
      {
        title: "The Nightingale",
        ISBN: "HF-12347",
        publishing_year: 2021,
        pages: 440,
        quantity: 7,
        price: 30,
      },
      {
        title: "The Pillars of the Earth",
        ISBN: "HF-12348",
        publishing_year: 2011,
        pages: 973,
        quantity: 3,
        price: 35,
      },
      {
        title: "The Other Boleyn Girl",
        ISBN: "HF-12349",
        publishing_year: 2019,
        pages: 409,
        quantity: 8,
        price: 27,
      },
    ],
  },
  {
    category: "Science Fiction",
    books: [
      {
        title: "Foundation",
        ISBN: "SF-12345",
        publishing_year: 1999,
        pages: 255,
        quantity: 10,
        price: 18,
      },
      {
        title: "The Martian",
        ISBN: "SF-12346",
        publishing_year: 2011,
        pages: 369,
        quantity: 6,
        price: 22,
      },
      {
        title: "Ready Player One",
        ISBN: "SF-12347",
        publishing_year: 2011,
        pages: 374,
        quantity: 8,
        price: 20,
      },
      {
        title: "Snow Crash",
        ISBN: "SF-12348",
        publishing_year: 2021,
        pages: 480,
        quantity: 5,
        price: 25,
      },
      {
        title: "The Expanse: Leviathan Wakes",
        ISBN: "SF-12349",
        publishing_year: 2011,
        pages: 561,
        quantity: 4,
        price: 30,
      },
    ],
  },
  {
    category: "Mystery & Thriller",
    books: [
      {
        title: "Gone Girl",
        ISBN: "MT-12345",
        publishing_year: 2012,
        pages: 422,
        quantity: 5,
        price: 20,
      },
      {
        title: "The Girl with the Dragon Tattoo",
        ISBN: "MT-12346",
        publishing_year: 2005,
        pages: 465,
        quantity: 8,
        price: 25,
      },
      {
        title: "Big Little Lies",
        ISBN: "MT-12347",
        publishing_year: 2014,
        pages: 460,
        quantity: 7,
        price: 22,
      },
      {
        title: "The Silent Patient",
        ISBN: "MT-12348",
        publishing_year: 2019,
        pages: 336,
        quantity: 9,
        price: 30,
      }, // New book
      {
        title: "In the Woods",
        ISBN: "MT-12349",
        publishing_year: 2007,
        pages: 429,
        quantity: 5,
        price: 180,
      },
    ],
  },
];

//displays inventory data
const inventoryDiv = document.getElementById("inventory");
inventory.forEach((category) => {
  const categoryDiv = document.createElement("div");
  categoryDiv.classList.add("category");
  const categoryTitle = document.createElement("h2");
  categoryTitle.textContent = category.category;
  categoryDiv.appendChild(categoryTitle);
  category.books.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    const bookTitle = document.createElement("h3");
    bookTitle.textContent = book.title;
    bookDiv.appendChild(bookTitle);
    const bookDetails = ` <p><strong>ISBN:</strong> ${book.ISBN}</p> <p><strong>Year:</strong> ${book.publishing_year}</p> <p><strong>Pages:</strong> ${book.pages}</p> <p><strong>Quantity:</strong> ${book.quantity}</p> <p><strong>Price:</strong> ${book.price} €</p> `;
    bookDiv.innerHTML += bookDetails;
    categoryDiv.appendChild(bookDiv);
  });
  inventoryDiv.appendChild(categoryDiv);
});
//

function displayBooks() {
  const inventoryDiv = document.getElementById("inventory");

  inventory.forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");

    const categoryTitle = document.createElement("h2");
    categoryTitle.textContent = category.category;
    categoryDiv.appendChild(categoryTitle);

    category.books.forEach((book) => {
      const bookDiv = document.createElement("div");
      bookDiv.classList.add("book");

      const bookTitle = document.createElement("h3");
      bookTitle.textContent = book.title;
      bookDiv.appendChild(bookTitle);

      const bookDetails = `
          <p><strong>ISBN:</strong> ${book.ISBN}</p>
          <p><strong>Year:</strong> ${book.publishing_year} ${
        book.publishing_year === 2021
          ? "<span style='color:red'>New book</span>"
          : ""
      }</p>
          <p><strong>Pages:</strong> ${book.pages}</p>
          <p><strong>Quantity:</strong> ${book.quantity}</p>
          <p><strong>Price:</strong> ${book.price} €</p>
        `;
      bookDiv.innerHTML += bookDetails;

      categoryDiv.appendChild(bookDiv);
    });

    inventoryDiv.appendChild(categoryDiv);
  });
}

//
function calculateInventoryValue() {
  let overallTotalValue = 0;
  const totalValueDiv = document.getElementById("total-value");
  totalValueDiv.innerHTML = "";
  inventory.forEach((category) => {
    let categoryTotalValue = 0;
    category.books.forEach((book) => {
      const totalValue = book.price * book.quantity;
      categoryTotalValue += totalValue;
    });
    const categoryValueDiv = document.createElement("div");
    categoryValueDiv.classList.add("category-total");
    categoryValueDiv.innerHTML = `<p><strong>${category.category} Total Value:</strong> ${categoryTotalValue} €</p>`;
    totalValueDiv.appendChild(categoryValueDiv);
    overallTotalValue += categoryTotalValue;
  });
  const overallTotalValueDiv = document.createElement("div");
  overallTotalValueDiv.classList.add("overall-total");
  overallTotalValueDiv.innerHTML = `<h3>Overall Inventory Value:</h3><p>${overallTotalValue} €</p>`;
  totalValueDiv.appendChild(overallTotalValueDiv);
}
document
  .getElementById("calculate-button")
  .addEventListener("click", calculateInventoryValue);

// cheapest book
function findCheapestBook() {
  let cheapestBook = null;
  inventory.forEach((category) => {
    category.books.forEach((book) => {
      if (!cheapestBook || book.price < cheapestBook.price) {
        cheapestBook = book;
      }
    });
  });
  const cheapestBookDiv = document.getElementById("cheapest-book");
  cheapestBookDiv.innerHTML = ` <h3>Cheapest Book:</h3> <p><strong>Title:</strong> ${cheapestBook.title}</p> <p><strong>ISBN:</strong> ${cheapestBook.ISBN}</p> <p><strong>Year:</strong> ${cheapestBook.publishing_year}</p> <p><strong>Pages:</strong> ${cheapestBook.pages}</p> <p><strong>Quantity:</strong> ${cheapestBook.quantity}</p> <p><strong>Price:</strong> ${cheapestBook.price} €</p> `;
}
document
  .getElementById("cheapest-book-button")
  .addEventListener("click", findCheapestBook);

// expensive book
function findMostExpensiveBook() {
  let mostExpensiveBook = null;
  inventory.forEach((category) => {
    category.books.forEach((book) => {
      if (!mostExpensiveBook || book.price > mostExpensiveBook.price) {
        mostExpensiveBook = book;
      }
    });
  });
  const mostExpensiveBookDiv = document.getElementById("most-expensive-book");
  mostExpensiveBookDiv.innerHTML = ` <h3>Most Expensive Book:</h3> <p><strong>Title:</strong> ${mostExpensiveBook.title}</p> <p><strong>ISBN:</strong> ${mostExpensiveBook.ISBN}</p> <p><strong>Year:</strong> ${mostExpensiveBook.publishing_year}</p> <p><strong>Pages:</strong> ${mostExpensiveBook.pages}</p> <p><strong>Quantity:</strong> ${mostExpensiveBook.quantity}</p> <p><strong>Price:</strong> ${mostExpensiveBook.price} €</p> `;
}
document
  .getElementById("most-expensive-book-button")
  .addEventListener("click", findMostExpensiveBook);
// filter

function displayBooks(filteredBooks = inventory) {
  const inventoryDiv = document.getElementById("inventory");
  inventoryDiv.innerHTML = ""; // Clear previous content

  filteredBooks.forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");

    const categoryTitle = document.createElement("h2");
    categoryTitle.textContent = category.category;
    categoryDiv.appendChild(categoryTitle);

    category.books.forEach((book) => {
      const bookDiv = document.createElement("div");
      bookDiv.classList.add("book");

      const bookTitle = document.createElement("h3");
      bookTitle.textContent = book.title;
      bookDiv.appendChild(bookTitle);

      const bookDetails = `
          <p><strong>ISBN:</strong> ${book.ISBN}</p>
          <p><strong>Year:</strong> ${book.publishing_year} ${
        book.publishing_year === 2021
          ? "<span style='color:red'>New book</span>"
          : ""
      }</p>
          <p><strong>Pages:</strong> ${book.pages}</p>
          <p><strong>Quantity:</strong> ${book.quantity}</p>
          <p><strong>Price:</strong> ${book.price} €</p>
        `;
      bookDiv.innerHTML += bookDetails;

      categoryDiv.appendChild(bookDiv);
    });

    inventoryDiv.appendChild(categoryDiv);
  });
}

function applyFilters() {
  const categoryFilter = document.getElementById("category-filter").value;
  const titleFilter = document
    .getElementById("title-filter")
    .value.toLowerCase();
  const pagesFilter = parseInt(document.getElementById("pages-filter").value);

  const filteredBooks = inventory
    .map((category) => {
      const filteredCategory = {
        category: category.category,
        books: category.books.filter((book) => {
          const matchesCategory =
            !categoryFilter || category.category === categoryFilter;
          const matchesTitle =
            !titleFilter || book.title.toLowerCase().includes(titleFilter);
          const matchesPages = isNaN(pagesFilter) || book.pages <= pagesFilter;
          return matchesCategory && matchesTitle && matchesPages;
        }),
      };
      return filteredCategory;
    })
    .filter((category) => category.books.length > 0);

  displayBooks(filteredBooks);
}

document
  .getElementById("apply-filters-button")
  .addEventListener("click", applyFilters);

//
function sortBooks() {
  const sortOption = document.getElementById("sort-options").value;

  const sortedInventory = inventory.map((category) => {
    const sortedBooks = [...category.books];
    if (sortOption === "title-asc") {
      sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "price-asc") {
      sortedBooks.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      sortedBooks.sort((a, b) => b.price - a.price);
    }
    return {
      category: category.category,
      books: sortedBooks,
    };
  });

  displayBooks(sortedInventory);
}

document.getElementById("sort-button").addEventListener("click", sortBooks);

displayBooks();
