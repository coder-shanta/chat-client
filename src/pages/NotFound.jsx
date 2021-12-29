const NotFound = () => {
  return (
    <div className="container py-4">
      <h1>Opps!</h1>
      <p>
        It looks like you've reached a URL that doesn't exist. Go to
        <a href="/"> Home</a>.
      </p>
    </div>
  );
};

export default NotFound;
