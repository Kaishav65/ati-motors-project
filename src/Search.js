// Point 1 - Search Cards:
// Fetch all the companies list and show it in the form of card
// API: https://json-placeholder.mock.beeceptor.com/companies
// Users can search the company from the search bar. Use the following API to do this:
// API: https://json-placeholder.mock.beeceptor.com/companies/{company_id}

import React, { useState, useEffect } from "react";
// First,initalized states companies (stored companies data) and searchTerm(user input data).
const Search = () => {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

// Using given API form assigment fetching the data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://json-placeholder.mock.beeceptor.com/companies"
        );
        const data = await response.json();
        setCompanies(data); // set companies
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
// calling fetchData funtion
    fetchData();
  }, []);
  console.log(companies);

  // The filteredCompanies array will contain only those companies whose names (case-insensitively) 
  // include the searchTerm.
  // We are taking searchTerm from Input and filtering data acoordigly
  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        width: "50%",
        marginLeft:'30px',
      }}
    >
      <div>
      {/* This is search area ,and taking input 
      The onChange event is used to update the searchTerm state 
       */}
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "465px", height: "30px", marginBottom: "50px" }}
        />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "474px",
            justifyContent: "space-between",
          }}
        >
        {/* This maps through the filteredCompanies array and generates a div for each company. */}
          {filteredCompanies.map((company) => (
            <div
              key={company.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px",
                width: "114px",
                height: "112px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: '#D9D9D9',

              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "800",
                  color: "#536162",
                }}
              >
                {company.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
