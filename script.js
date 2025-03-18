document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript Loaded"); // Debugging step

    const filterButtons = document.querySelectorAll("#filter-buttons button");
    const filterableCards = document.querySelectorAll("#filterable-cards .images");

    if (!filterButtons.length || !filterableCards.length) {
        console.error("No filter buttons or filterable cards found.");
        return; // Exit if elements are missing
    }

    const filterCards = (e) => {
        console.log("Button Clicked:", e.target.dataset.filter); // Debugging step

        // Remove active class from previously active button
        const activeButton = document.querySelector("#filter-buttons .active");
        if (activeButton) {
            activeButton.classList.remove("active");
        }
        e.target.classList.add("active");

        // Get the filter value from the clicked button
        const filterValue = e.target.dataset.filter;

        // Show/hide cards based on the filter
        filterableCards.forEach(card => {
            console.log("Card Name:", card.dataset.name); // Debugging step

            if (card.dataset.name === filterValue || filterValue === "all") {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        });
    };

    // Add event listener to all filter buttons
    filterButtons.forEach(button => button.addEventListener("click", filterCards));
});

    