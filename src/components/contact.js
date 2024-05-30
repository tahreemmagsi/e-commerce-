import React, { useState } from "react";

function Contact() {
  const [clientName, setClientName] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [formVisible, setFormVisible] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");

    try {
      const response = await fetch("https://formspree.io/f/mleqgvrb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSuccessMsg(
        `Thank you dear ${clientName}, your message has been sent successfully. Further details will be sent to you by email at ${email}.`
      );
      setFormVisible(false);
    } catch (error) {
      console.error(error);
      setSuccessMsg("Failed to send message. Please try again later.");
    }
  };

  return (
    <>
      <h2 className="mb-6 mt-6 ml-6 text-gray-700 text-2xl text-center justify-center font-bold dark:text-gray-400">
        Contact Us
      </h2>
      <div className="flex flex-col md:flex-row">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.2967379610022!2d71.67463287460411!3d29.39087424924226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90cf30578a49%3A0x4e05e22c604cb18f!2sDubai%20Plaza%2C%20Circular%20Rd%2C%20Old%20City%20Bahawalpur%2C%20Bahawalpur%2C%20Punjab%2063100%2C%20Pakistan!5e0!3m2!1sen!2s!4v1706511534370!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          className="mb-16 mr-8 w-full"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div class="w-full max-w-xs">
          {formVisible && (
            <form
              class="bg-white border shadow-md rounded px-8 mr-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
              method="POST"
              action="https://formspree.io/f/mleqgvrb"
            >
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Username
                </label>
                <input
                  name="username"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  required
                  autoComplete="off"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />
              </div>
              <div class="mb-6">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="email"
                >
                  Email
                </label>
                <input
                  name="email"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email"
                  required
                  autoComplete="off"
                />
              </div>
              <div class="mb-6 relative">
                <label
                  for="message"
                  class="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                  placeholder="Write a message"
                  rows="4"
                ></textarea>
              </div>
              <div class="flex items-center justify-between ml-16">
                <input
                  class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  value="Send"
                />
              </div>
            </form>
          )}
          {successMsg && (
            <div className="text-green-700 mb-16 text-center mt-[10rem] ">{successMsg}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Contact;

