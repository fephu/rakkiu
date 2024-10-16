import LookbookCard from "@/components/LookbookCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import lookbook1 from "@/assets/lookbook1.webp";
import lookbook2 from "@/assets/lookbook2.webp";
import lookbook3 from "@/assets/lookbook3.webp";
import lookbook4 from "@/assets/lookbook4.webp";
import lookbook5 from "@/assets/lookbook5.jpg";
import lookbook6 from "@/assets/lookbook6.jpg";
import lookbook7 from "@/assets/lookbook7.jpg";
import lookbook8 from "@/assets/lookbook8.webp";

const lookbook = [
  {
    title: "'HOMEBODY' SPRING SUMMER'24 COLLECTION",
    img: lookbook1,
    description: "",
  },
  {
    title: "‘???’ FALL WINTER ’23 COLLECTION LOOKBOOK",
    img: lookbook2,
    description: "",
  },
  {
    title: "‘???’ FALL WINTER ’23 COLLECTION CAMPAIGN",
    img: lookbook3,
    description: "",
  },
  {
    title: "‘LOST IN TOKYO’ PREFALL ’23 COLLECTION CAMPAIGN",
    img: lookbook4,
    description: "",
  },
  {
    title: "RAKKIU X Leninn Skateshop // “GREAT MINDS THINK ALIKE” LOOKBOOK",
    img: lookbook5,
    description: "",
  },
  {
    title: "RAKKIU X Leninn Skateshop // “GREAT MINDS THINK ALIKE” RUNWAY",
    img: lookbook6,
    description: "",
  },
  {
    title: "RAKKIU X Leninn Skateshop // “RAKKIU old carpenter’s”",
    img: lookbook7,
    description: "",
  },
  {
    title: "RAKKIU X Leninn Skateshop // “GREAT MINDS THINK ALIKE” CAMPAIGN",
    img: lookbook8,
    description: "",
  },
];

const Lookbook = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-10 gap-x-8">
          {lookbook &&
            lookbook.map((item) => (
              <LookbookCard
                title={item.title}
                description={item.description}
                img={item.img}
                key={item.title}
              />
            ))}
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Lookbook;
