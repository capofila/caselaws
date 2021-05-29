import React, { useState } from "react";
import DynamicTree from "react-dynamic-animated-tree";
import { uuid } from "uuidv4";



export default function SideBar() {
    var months = [
        {
          id: uuid(),
          title: "Months",
          childNodes: [
            {
              id: uuid(),
              title: "January",
              childNodes: []
            },
            {
              id: uuid(),
              title: "Febuary",
              childNodes: []
            },
            {
              id: uuid(),
              title: "March",
              childNodes: []
            },
            {
              id: uuid(),
              title: "April",
              childNodes: []
            },
            {
              id: uuid(),
              title: "May",
              childNodes: []
            },
            {
              id: uuid(),
              title: "June",
              childNodes: []
            },
            {
              id: uuid(),
              title: "July",
              childNodes: []
            },
            {
              id: uuid(),
              title: "August",
              childNodes: []
            },
            {
              id: uuid(),
              title: "September",
              childNodes: []
            },
            {
              id: uuid(),
              title: "October",
              childNodes: []
            },
            {
              id: uuid(),
              title: "November",
              childNodes: []
            },
            {
              id: uuid(),
              title: "December",
              childNodes: []
            }
      
          ]
        }
      ]
      
      var years = [
        {
          id: uuid(),
          title: "Year",
          childNodes: [
            {
              id: uuid(),
              title: "1947",
              childNodes: months
            },
      
            {
              id: uuid(),
              title: "1947",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1948",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1949",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1950",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1951",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1952",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1953",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1954",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1955",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1956",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1957",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1958",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1959",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1960",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1961",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1962",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1963",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1964",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1965",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1966",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1967",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1968",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1969",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1970",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1971",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1972",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1973",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1974",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1975",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1976",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1977",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1978",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1979",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1980",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1981",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1982",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1983",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1984",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1985",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1986",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1987",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1988",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1989",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1990",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1991",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1992",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1993",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1994",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1995",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1996",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1997",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1998",
              childNodes: months
            },
            {
              id: uuid(),
              title: "1999",
              childNodes: months
            },
            {
              id: uuid(),
              title: "2000",
              childNodes: months
            },
            {
              id: uuid(),
              title: "2001",
              childNodes: months
            },
            {
              id: uuid(),
              title: "2002",
              childNodes: months
            },
            {
              id: uuid(),
              title: "2003",
              childNodes: months
            },
            {
              id: uuid(),
              title: "2004",
              childNodes: months
            },
            {
              id: uuid(),
              title: "2005",
              childNodes: months
            },
            {
              id: uuid(),
              title: "2006",
              childNodes: months
            },
            {
              id: uuid(),
              title: "2007",
              childNodes: months
            },
            {
              id: uuid(),
              title: "2008",
              childNodes: months
            },
            {
              id: uuid(),
              title: "2009",
              childNodes: months
            },
            {
              id: uuid(),
              title: "2010",
              childNodes: months
            },
            {
              id: uuid(),
              title: "2011",
              childNodes: months
            },
            {
              id: uuid(),
              title: "2012",
              childNodes: months
            },
            {
              id: uuid(),
              title: "2013",
              childNodes: months
            },
            {
              id: uuid(),
              title: "2014",
              childNodes: months
            },
            {
              id: uuid(),
              title: "2015",
              childNodes: months
            },
            {
              id: uuid(),
              title: "2016",
              childNodes: months
            },
            {
              id: uuid(),
              title: "2017",
              childNodes: months
            },
            {
              id: uuid(),
              title: "2018",
              childNodes: months
            },
            {
              id: uuid(),
              title: "2019",
              childNodes: months
            },
            {
              id: uuid(),
              title: "2020",
              childNodes: months
            },
            {
              id: uuid(),
              title: "2021",
              childNodes: months
            },
          ]
        }
      ]
    var dataList = [
        {
          id: uuid(),
          title: "Judgements",
          childNodes: [
            {
              id: uuid(),
              title: "Courts",
              childNodes: [
                {
                  id: uuid(),
                  title: "Supreeme court Of India",
                  childNodes: years
                },
                {
                  id: uuid(),
                  title: "Allahabad High Court",
                  childNodes: years
                },
                {
                  id: uuid(),
                  title: "Bombay High Court",
                  childNodes: years
                },
                {
                  id: uuid(),
                  title: "Calcutta High Court",
                  childNodes: years
                },
                {
                  id: uuid(),
                  title: "Chattisgarh High Court",
                  childNodes: years
                },
                {
                  id: uuid(),
                  title: "Delhi High Court",
                  childNodes: years
                },
                {
                  id: uuid(),
                  title: "High Court of Meghalaya",
                  childNodes: years
                },
                {
                  id: uuid(),
                  title: "Karnataka High Court",
                  childNodes: years
                },
                {
                  id: uuid(),
                  title: "Madhya Pradesh High Court",
                  childNodes: years
                },
                {
                  id: uuid(),
                  title: "Madras High Court",
                  childNodes: years
                },
                {
                  id: uuid(),
                  title: "Orissa High Court",
                  childNodes: years
                },
                {
                  id: uuid(),
                  title: "Rajasthan High Court",
                  childNodes: years
                }
              ]
            }, {
              id: uuid(),
              title: "Judges",
              childNodes: [
                {
                  id: uuid(),
                  title: "Supreeme court Of India",
                  childNodes: years
                }
              ]
            }
          ]
        },
        {
          id: uuid(),
          title: "Bare Acts",
          childNodes: [
            {
              id: uuid(),
              title: "September",
              childNodes: []
            },
            {
              id: uuid(),
              title: "October",
              childNodes: []
            },
            {
              id: uuid(),
              title: "November",
              childNodes: []
            }
          ]
        }
      ];


    var data = [
        {
          title: "Sri Lanka",
          id: "1",
          childNodes: [
            {
              title: "Western Province",
              id: "11",
              childNodes: [
                {
                  title: "Colombo District",
                  id: "111",
                  childNodes: []
                }
              ]
            },
            {
              title: "Central Province",
              id: "12",
              childNodes: [
                {
                  parentNode: null,
                  childNodes: [],
                  title: "Kandy",
                  id: "121"
                }
              ]
            }
          ]
        },
        {
          title: "India",
          id: "2",
          childNodes: [
            {
              title: "Maharashtra",
              id: "21",
              childNodes: [
                {
                  title: "Pune",
                  id: "211",
                  childNodes: []
                }
              ]
            }
          ]
        }
      ];
    const [node, setSelectedNode] = useState("");

    return (
        <div>
            <p>Selected Node: {JSON.stringify({ node: node })}</p>
            <DynamicTree
                key="root"
                id="root"
                data={[...years]}
                title="Dynamic Tree"
                onClick={node => setSelectedNode(node)}
            />
        </div>
    )
}
