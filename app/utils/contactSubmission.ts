import { sendMail } from "./sendMail";
import { template } from "lodash";

export const contactSubmission = async (request: any) => {
  const body = await request.formData();

  const payload = {
    name: body.get("name"),
    email: body.get("email"),
    industry: body.get("industry"),
    technology: body.get("technology"),
    duration: body.get("duration"),
    budget: body.get("budget"),
    message: body.get("description"),
    phone: body.get("phone"), 
    company: body.get("company"),
  };

  const message = template(
    "<h3>Message from <%- payload.name %></h3>" +
      `<% _.forEach(addtionalInfo, function(addtionalInfo) ` +
      `{ %> 
       <table border = '1'
       style='border-radius: 5px; 
       font-size: 12px; 
       font-weight: normal;
       border: none;
       border-collapse: collapse;
       width: 100%;
       max-width: 100%;
       font-sizw: 20%;
       white-space: nowrap;
       border-color:  	#E0E0E0 rgb(224,224,224);
       margin-top: 5%;  '>
        <tbody>
          <tr>
            <th width='10%'><%- addtionalInfo.label %></th>
            <td style='padding: 10px'><%- payload[addtionalInfo.key] %></td>
          </tr>
        </tbody>
      </table> <% }); %>`
  )({
    addtionalInfo: [
      {
        label: "Phone",
        key: "phone",
      },
      {
        label: "Email",
        key: "email",
      },
      {
        label: "Company",
        key: "company",
      },
      {
        label: "Industry",
        key: "industry",
      },
      {
        label: "Technology",
        key: "technology",
      },
      {
        label: "Duration",
        key: "duration",
      },
      {
        label: "Budget",
        key: "budget",
      },
      {
        label: "Message",
        key: "message",
      },
    ],
    payload,
  });

  return sendMail({
    name: payload.name,
    email: payload.email,
    message: message,
  }).catch((e) => console.log(e));
};
