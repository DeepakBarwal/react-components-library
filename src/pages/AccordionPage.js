import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: "sdjk",
      label: "Can I use react on a project",
      content: "You can use it You can use it You can use it You can use it",
    },
    {
      id: "hjt",
      label: "Can I use js on a project",
      content: "You can use it You can use it You can use it You can use it",
    },
    {
      id: "cvb",
      label: "Can I use css on a project",
      content: "You can use it You can use it You can use it You can use it",
    },
  ];

  return <Accordion items={items} />;
};

export default AccordionPage;
