import Image from "next/image";

import devImg from "@/assets/images/developer.jpg";

const AlbumPage = () => {
  return (
    <div>
      <h2>This Image Component</h2>
      <div className="flex gap-5">
        <Image
          src="https://assets.playgroundai.com/9e05bcdd-c8e8-4572-8187-47c098d83ecc.jpg"
          width={500}
          height={800}
          alt="next-girl"
        />
        {/* <img></img> avoid */}

        <Image src={devImg} width={500} height={800} alt="next-girl" />
      </div>
    </div>
  );
};

export default AlbumPage;
