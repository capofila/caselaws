import axios from "axios";
import { uuid } from "uuidv4";

export const courtNamesUrl = 'http://155.138.197.117:8983/solr/court_names/select?facet.field=court_name&facet.query=*:*&facet=on';

const courtNamesList = ['hello'];

axios.get(courtNamesUrl, courtNamesList)
  .then((response) => {
    console.log(response.data);
    response.data.facet_counts.facet_fields.court_name.forEach(element => {
      // if(isNaN(element) ){
      courtNamesList.push(element);
      // }else{
      // alert(element)
      // }
    });
    alert(JSON.stringify(courtNamesList))
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });



export const months = [
  {
    id: uuid(),
    name: "Months",
    children: [
      {
        id: uuid(),
        name: "January",
      },
      {
        id: uuid(),
        name: "Febuary",
      },
      {
        id: uuid(),
        name: "March",
      },
      {
        id: uuid(),
        name: "April",
      },
      {
        id: uuid(),
        name: "May",
      },
      {
        id: uuid(),
        name: "June",
      },
      {
        id: uuid(),
        name: "July",
      },
      {
        id: uuid(),
        name: "August",
      },
      {
        id: uuid(),
        name: "September",
      },
      {
        id: uuid(),
        name: "October",
      },
      {
        id: uuid(),
        name: "November",
      },
      {
        id: uuid(),
        name: "December",
      }

    ]
  }
]

export const years = [
  {
    id: uuid(),
    name: "Year",
    children: [
      {
        id: uuid(),
        name: "1947",
        children: months
      },

      {
        id: uuid(),
        name: "1947",
        children: months
      },
      {
        id: uuid(),
        name: "1948",
        children: months
      },
      {
        id: uuid(),
        name: "1949",
        children: months
      },
      {
        id: uuid(),
        name: "1950",
        children: months
      },
      {
        id: uuid(),
        name: "1951",
        children: months
      },
      {
        id: uuid(),
        name: "1952",
        children: months
      },
      {
        id: uuid(),
        name: "1953",
        children: months
      },
      {
        id: uuid(),
        name: "1954",
        children: months
      },
      {
        id: uuid(),
        name: "1955",
        children: months
      },
      {
        id: uuid(),
        name: "1956",
        children: months
      },
      {
        id: uuid(),
        name: "1957"
      },
      {
        id: uuid(),
        name: "1958",
        children: months
      },
      {
        id: uuid(),
        name: "1959",
        children: months
      },
      {
        id: uuid(),
        name: "1960",
        children: months
      },
      {
        id: uuid(),
        name: "1961",
        children: months
      },
      {
        id: uuid(),
        name: "1962",
        children: months
      },
      {
        id: uuid(),
        name: "1963",
        children: months
      },
      {
        id: uuid(),
        name: "1964",
        children: months
      },
      {
        id: uuid(),
        name: "1965",
        children: months
      },
      {
        id: uuid(),
        name: "1966",
        children: months
      },
      {
        id: uuid(),
        name: "1967",
        children: months
      },
      {
        id: uuid(),
        name: "1968",
        children: months
      },
      {
        id: uuid(),
        name: "1969",
        children: months
      },
      {
        id: uuid(),
        name: "1970",
        children: months
      },
      {
        id: uuid(),
        name: "1971",
        children: months
      },
      {
        id: uuid(),
        name: "1972",
        children: months
      },
      {
        id: uuid(),
        name: "1973",
        children: months
      },
      {
        id: uuid(),
        name: "1974",
        children: months
      },
      {
        id: uuid(),
        name: "1975",
        children: months
      },
      {
        id: uuid(),
        name: "1976",
        children: months
      },
      {
        id: uuid(),
        name: "1977",
        children: months
      },
      {
        id: uuid(),
        name: "1978",
        children: months
      },
      {
        id: uuid(),
        name: "1979",
        children: months
      },
      {
        id: uuid(),
        name: "1980",
        children: months
      },
      {
        id: uuid(),
        name: "1981",
        children: months
      },
      {
        id: uuid(),
        name: "1982",
        children: months
      },
      {
        id: uuid(),
        name: "1983",
        children: months
      },
      {
        id: uuid(),
        name: "1984",
        children: months
      },
      {
        id: uuid(),
        name: "1985",
        children: months
      },
      {
        id: uuid(),
        name: "1986",
        children: months
      },
      {
        id: uuid(),
        name: "1987",
        children: months
      },
      {
        id: uuid(),
        name: "1988",
        children: months
      },
      {
        id: uuid(),
        name: "1989",
        children: months
      },
      {
        id: uuid(),
        name: "1990",
        children: months
      },
      {
        id: uuid(),
        name: "1991",
        children: months
      },
      {
        id: uuid(),
        name: "1992",
        children: months
      },
      {
        id: uuid(),
        name: "1993",
        children: months
      },
      {
        id: uuid(),
        name: "1994",
        children: months
      },
      {
        id: uuid(),
        name: "1995",
        children: months
      },
      {
        id: uuid(),
        name: "1996",
        children: months
      },
      {
        id: uuid(),
        name: "1997",
        children: months
      },
      {
        id: uuid(),
        name: "1998",
        children: months
      },
      {
        id: uuid(),
        name: "1999",
        children: months
      },
      {
        id: uuid(),
        name: "2000",
        children: months
      },
      {
        id: uuid(),
        name: "2001",
        children: months
      },
      {
        id: uuid(),
        name: "2002",
        children: months
      },
      {
        id: uuid(),
        name: "2003",
        children: months
      },
      {
        id: uuid(),
        name: "2004",
        children: months
      },
      {
        id: uuid(),
        name: "2005",
        children: months
      },
      {
        id: uuid(),
        name: "2006",
        children: months
      },
      {
        id: uuid(),
        name: "2007",
        children: months
      },
      {
        id: uuid(),
        name: "2008",
        children: months
      },
      {
        id: uuid(),
        name: "2009",
        children: months
      },
      {
        id: uuid(),
        name: "2010",
        children: months
      },
      {
        id: uuid(),
        name: "2011",
        children: months
      },
      {
        id: uuid(),
        name: "2012",
        children: months
      },
      {
        id: uuid(),
        name: "2013",
        children: months
      },
      {
        id: uuid(),
        name: "2014",
        children: months
      },
      {
        id: uuid(),
        name: "2015",
        children: months
      },
      {
        id: uuid(),
        name: "2016",
        children: months
      },
      {
        id: uuid(),
        name: "2017",
        children: months
      },
      {
        id: uuid(),
        name: "2018",
        children: months
      },
      {
        id: uuid(),
        name: "2019",
        children: months
      },
      {
        id: uuid(),
        name: "2020",
        children: months
      },
      {
        id: uuid(),
        name: "2021",
        children: months
      },
    ]
  }
]

export const dataList = [
  {
    id: uuid(),
    name: "Judgements",
    children: [
      {
        id: uuid(),
        name: "Courts",
        children: [
          {
            id: uuid(),
            name: "Supreeme court Of India",
            children: years
          },
          {
            id: uuid(),
            name: "Allahabad High Court",
            children: years
          },
          {
            id: uuid(),
            name: "Bombay High Court",
            children: years
          },
          {
            id: uuid(),
            name: "Calcutta High Court",
            children: years
          },
          {
            id: uuid(),
            name: "Chattisgarh High Court",
            children: years
          },
          {
            id: uuid(),
            name: "Delhi High Court",
            children: years
          },
          {
            id: uuid(),
            name: "High Court of Meghalaya",
            children: years
          },
          {
            id: uuid(),
            name: "Karnataka High Court",
            children: years
          },
          {
            id: uuid(),
            name: "Madhya Pradesh High Court",
            children: years
          },
          {
            id: uuid(),
            name: "Madras High Court",
            children: years
          },
          {
            id: uuid(),
            name: "Orissa High Court",
            children: years
          },
          {
            id: uuid(),
            name: "Rajasthan High Court",
            children: years
          }
        ]
      }, {
        id: uuid(),
        name: "Judges",
        children: [
          {
            id: uuid(),
            name: "Supreeme court Of India",
            children: years
          }
        ]
      }
    ]
  },
  {
    id: uuid(),
    name: "Bare Acts",
    children: [
      {
        id: uuid(),
        name: "September"
      },
      {
        id: uuid(),
        name: "October"
      },
      {
        id: uuid(),
        name: "November"
      }
    ]
  }
];
