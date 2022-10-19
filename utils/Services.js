const send_otp = async (telephone) => {
  // Twillo Api

  return { sent: true, code: 1234 };
};

const fetch_conversion_rates = async () => {
  return new Object({
    dollar: 1,
    naira: 1,
    euro: 1,
    pound: 1,
  });
};

export { send_otp, fetch_conversion_rates };
