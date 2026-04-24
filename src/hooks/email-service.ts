export async function sendEmailLog(email: string, message: string) {
  const FORM_ID = "mknyrnjg";
  await fetch(`https://formspree.io/f/${FORM_ID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email,
      message,
    }),
  });
}