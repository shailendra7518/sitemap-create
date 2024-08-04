const useJobSchema = ({ jobInfo }: any) => {
  let schemaData = `{
        "@context" : "https://schema.org/",
        "@type" : "JobPosting",
        "title" : "${jobInfo.title}",
        "description" : "<p>${jobInfo.description}</p>",
        "identifier": {
          "@type": "PropertyValue",
          "name": "TechStaunch Software Solutions Pvt. Ltd."
        },
    
        "datePosted" : "${
          jobInfo.postingDate ? jobInfo.postingDate : jobInfo._createdAt
        }",
    
        "hiringOrganization" : {
          "@type" : "Organization",
          "name" : "TechStaunch Software Solutions Pvt. Ltd.",
          "sameAs" : ["https://techstaunch.com", "https://www.facebook.com/techstaunch/","https://www.linkedin.com/company/techstaunch", "https://twitter.com/TechStaunch" ],
          "logo" : "https://cdn.sanity.io/images/q62byq95/production/49052bc496dbe1da46c50a08f259fc3c8c97b491-1200x630.jpg"
        },
        
        "jobLocation": [${jobInfo.location.map((place: any) => {
          return `
                  {
                    "@type": "Place",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "${place.address}",
                      "addressLocality": "${place.city}",
                      "addressRegion": "${place.state}",
                      "postalCode": "${place.pincode}",
                      "addressCountry": "IN"
                    }
                  }
          
                  `;
          })}
        ]
      }               
    `;

  return schemaData;
};

export default useJobSchema;
