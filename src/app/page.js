import Counter from "@/components/Counter/Counter";
import Link from "next/link";

const HomePage = () => {
  // throw new Error();
  return (
    <div>
      <h2>This is next home page</h2>

      <Counter />
      <Link href="/about">
        <button className="btn btn-accent">About</button>
      </Link>
      <Link href="/contact">
        <button className="btn btn-accent">Contact</button>
      </Link>
      <Link href="/news">
        <button className="btn btn-accent">News</button>
      </Link>
    </div>
  );
};

export default HomePage;
