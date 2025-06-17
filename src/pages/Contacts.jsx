import { useForm } from "react-hook-form";

const Contacts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Форма отправлена:", data);
    alert("Спасибо за сообщение!");
    reset();
  };

  return (
    <div className="contacts-page" style={{ padding: "2rem" }}>
      <h1>Контакты</h1>

      <p>📍 <strong>Адрес:</strong> г. Москва, ул. Производственная, д. 12</p>
      <p>📞 <strong>Телефон:</strong> +7 (800) 555-55-55</p>
      <p>✉️ <strong>Email:</strong> info@specodegda.ru</p>
      <p>🕒 <strong>Режим работы:</strong> Пн–Пт с 9:00 до 18:00</p>

      <h2 style={{ marginTop: "2rem" }}>Форма обратной связи</h2>

      <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "400px" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Имя:</label><br />
          <input
            {...register("name", { required: "Введите имя" })}
            style={{ width: "100%", padding: "0.5rem" }}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label><br />
          <input
            type="email"
            {...register("email", {
              required: "Введите email",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Некорректный email",
              },
            })}
            style={{ width: "100%", padding: "0.5rem" }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Сообщение:</label><br />
          <textarea
            {...register("message", { required: "Введите сообщение" })}
            style={{ width: "100%", padding: "0.5rem", height: "100px" }}
          />
          {errors.message && <p style={{ color: "red" }}>{errors.message.message}</p>}
        </div>

        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Отправить
        </button>
      </form>
    </div>
  );
};

export default Contacts;
