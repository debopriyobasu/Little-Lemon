import Main from "./Main";

function BookingPage() {
  return (
    <>
      <div className="bg-lemongreen">
        <div className="lg:container lg:mx-auto lg:max-w-screen-lg py-10">
          <h1 className="text-5xl font-karla text-lemonyellow font-extrabold tracking-wide text-center">
            Reservations
          </h1>
        </div>
      </div>
      <Main />
    </>
  );
}

export default BookingPage;
