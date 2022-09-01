import { FunctionComponent } from "react";

const posts = [
  {
    id: "a2c11a19ab5b",
    author: { displayName: "Esther Howard" },
    publishedAt: "MAR 19, 2021 AT 9:51 AM",
    type: "Image",
    payload: {
      src: "https://i.postimg.cc/9WyPrzPB/img-14-1.jpg",
      width: 1400,
      height: 660,
    },
    headline: "Etiam elementum ante ligula",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. est sit aliqua dolor do amet.",
    cost: { wizTokens: 25 },
    likesCount: 14,
    commentsCount: 0,
  },
  {
    id: "91f5cac88623",
    author: { displayName: "Esther Howard" },
    publishedAt: "MAR 19, 2021 AT 9:51 AM",
    type: "Image",
    payload: {
      src: "https://i.postimg.cc/zGyr097J/img-5.jpg",
      width: 1400,
      height: 660,
    },
    headline: "Etiam elementum ante ligula",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. est sit aliqua dolor do amet Read more ",
    cost: { wizTokens: 25 },
    likesCount: 14,
    commentsCount: 0,
  },
];

const Grid: FunctionComponent = () => {
  return (
    <>
      {posts.map((p) => (
        <article key={p.id} className="bg-white rounded-xl py-4 mb-4">
          f
        </article>
      ))}
    </>
  );
};

export default Grid;
