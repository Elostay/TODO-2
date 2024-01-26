import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Hello, friend
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Write your tasks</span>
      </h1>
      <p className="desc text-center">
        Todolist: Your simple and powerful tool for organizing tasks, setting
        deadlines, and collaborating effortlessly. Boost productivity and
        achieve your goals with ease.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
