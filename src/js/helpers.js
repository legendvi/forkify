import { TIMEOUT_SEC } from "./config.js";

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`${res.status} ${data.message}`);
    }
    return data;
  } catch (err) {
    throw Error(err);
  }
};

// export const getJSON = async function (url) {
//   try {
//     const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(`${res.status} ${data.message}`);
//     }
//     return data;
//   } catch (err) {
//     throw Error(err);
//   }
// };

// export const sendJSON = async function (url, recipe) {
//   try {
//     const fetchPro = fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(recipe),
//     });
//     const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(`${res.status} ${data.message}`);
//     }
//     return data;
//   } catch (err) {
//     throw Error(err);
//   }
// };

export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(
        new Error(
          `Request took too long! Session Timeout after ${s} second. Please Try Again`
        )
      );
    }, s * 1000);
  });
};
