export default function Contact({description,title}) {
  const siteWebApiUrl = process.env.NEXT_PUBLIC_WEB_API_URL;
  const siteWebApiId = process.env.NEXT_PUBLIC_WEB_API_ID;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      event.target.name.value.trim() == "" ||
      event.target.phone.value.trim() == "" ||
      event.target.panel_id.value.trim() == "" ||
      event.target.email.value.trim() == "" ||
      event.target.subject.value.trim() == "" ||
      event.target.content.value.trim() == ""
    ) {
      alert("Bütün alanları doldurun");
    } else {
      const datas = {
        name: event.target.name.value,
        phone: event.target.phone.value,
        panel_id: event.target.panel_id.value,
        email: event.target.email.value,
        subject: event.target.subject.value,
        content: event.target.content.value,
      };
      const JSONdata = JSON.stringify(datas);
      const endpoint = siteWebApiUrl + "/api/v1/contact";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      };

      try {
        const response = await fetch(endpoint, options);
        const { data } = await response.json();
        alert(`${data.message}`);
        location.reload();
      } catch (err) {
        alert("Sunucu tarafında sorun oluştu. Daha sonra tekrar deneyiniz!");
      }
    }
  };
  return (
    <>
      <h1 className="pb-4">{title}</h1>
      <p className="fs-4">{description}</p> 
      <form onSubmit={handleSubmit}>
        <input type={"hidden"} name="panel_id" value={siteWebApiId} />
        <div className="mb-3">
          <label htmlFor="input1" className="form-label">
            Adınız
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="form-control"
            placeholder="Adınız"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="input2" className="form-label">
            Telefon
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            required
            className="form-control"
            placeholder="555 555 55 55"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="input3" className="form-label">
            E-posta
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="form-control"
            placeholder="ornek@ornek.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="input4" className="form-label">
            Konu
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="form-control"
            placeholder="Konu"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="textarea1" className="form-label">
            Mesajınız
          </label>
          <textarea
            id="content"
            name="content"
            required
            className="form-control"
            rows="3"
          ></textarea>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Gönder
          </button>
        </div>
      </form>
    </>
  );
}
