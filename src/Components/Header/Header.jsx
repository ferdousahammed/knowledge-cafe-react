import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <>
      <header className="space-y-5  lg:mx-[5%] max-w-screen-2xl mx-[2%] my-4 lg:my-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
          <img src={profile} alt="" />
        </div>
        <hr />
      </header>
    </>
  );
};

export default Header;
