const DASH = {                           // DASH object to store data //
    data: [],                           // empty array to store data //
    init() {                            // init function to initialize the app //         
        DASH.addlisteners();
    },
    /////////////// addlisteners function to add listeners ////////////////////////////////////////////////////////////////////////////////////////
    addlisteners() {
        const form = document.querySelector('#add-website-form');
        form.addEventListener('submit', DASH.saveData); // submit listener to call the function to save data //

        if (DASH.data.length > 0) {                     // if the data array is not empty, call the function to build row //
            DASH.data.forEach(DASH.buildRow);           
        }
        document
            .getElementById('#btnExport')
            .addEventListener('click', DASH.exportData);

        document
            .querySelector('table tbody') // table body listener to call the function to edit data //
            .addEventListener('dblclick', DASH.editCell);
    },
    /////////////// saveData function to save data ////////////////////////////////////////////////////////////////////////////////////////
    saveData(ev) {                    
        ev.preventDefault();        // prevent the default action of the form submission //
        const form = ev.target;         // name="" element trigger //
        const formData = new FormData(form);        // create a new FormData object using values in form field of html//
        
        DASH.cacheData(formData);       // call the function to cache data //

        DASH.buildRow(formData);        // call the function to build row //
        // /////clear the form for better user experience // //////
        form.reset();
        // focus on the first input, Website Name //
        document.getElementById('website_name').focus();
    },
    //////////////// cacheData function to cache data ////////////////////////////////////////////////////////////////////////////////////////
    cacheData(formData) {
        /////// create an object to store the data //////
        DASH.data.push(Array.from(formData.values()));  // array of values from the 4 input form fields // 
        console.table(DASH.data);                       // console.table to display the data in a table //
    },
    buildRow(formData) {
        const tbody = document.querySelector('#display > table > tbody'); // selectt table body //
        const tr = document.createElement('tr');                // create table row //
        tr.setAttribute('data-row', document.querySelectorAll('tbody tr').length); // set the data-row attribute to length of table row //
        let col=0;
        ///////////// loop through the form data and create a table cell for each input field ////////////////////////////////////////////
        for(let entry of formData.entries()) {
            tr.innerHTML += `<td data-col="${col}" data-name= "${entry[0]}">${entry[1]}</td>`; 
            col++;
        }
        tbody.append(tr);     // append row to table body//
    },
    exportData(ev) {
    },
    editCell(ev) {
    },
};

document.addEventListener('DOMContentLoaded', DASH.init);

/////////////////// Jesse's Code commented out for testing no disrespect ///////////////////////

// const addWebsiteForm = document.getElementById('add-website-form');

// addWebsiteForm.addEventListener('submit', async (event) => {
//     event.preventDefault();

//     const formData = {
//         websiteName: document.getElementById('website_name').value.trim(),
//         websiteURL: document.getElementById('website_url').value.trim(),
//         username: document.getElementById('username').value.trim(),
//         password: document.getElementById('password').value.trim()
//     };

//     const response = await fetch('/api/websites', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//     });

//     if (response.ok) {
//         // Refresh the page to see the updated list or navigate somewhere
//         location.reload();
//     } else {
//         alert('Failed to add the website.');
//     }
// });
