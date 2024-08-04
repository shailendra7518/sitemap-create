import ClientSatisfaction from "~/components/Icons/ClientSatisfaction";
import OfficeTeamMembers from "~/components/Icons/OfficeTeamMembers";
import ProjectCompleted from "~/components/Icons/ProjectCompleted";
import RecurringCustomers from "~/components/Icons/RecurringCustomers";

const projectStates = [
  {
    icon: <RecurringCustomers />,
    title: "94",
    subtitle: "Recurring Customers",
    sign: "%",
    isCounter: true,
  },
  {
    icon: <ClientSatisfaction />,
    title: "5/5",
    subtitle: "Client Satisfaction",
    isCounter: false,
  },
  {
    icon: <ProjectCompleted />,
    title: "70",
    subtitle: "Project Completed",
    sign: "+",
    isCounter: true,
  },
  {
    icon: <OfficeTeamMembers />,
    title: "20",
    subtitle: "Our Team Members",
    sign: "+",
    isCounter: true,
  },
];

export default projectStates;
