const BASE_URL = "https://food-delivery-app-phi-six.vercel.app";

export async function signUpUser(email: string, password: string) {
  const response = await fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Failed to sign up");
  }

  return response.json();
}

export async function signInUser(email: string, password: string) {
  const response = await fetch(`${BASE_URL}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Failed to sign in");
  }

  return response.json();
}

export async function fetchUserData(token: string) {
  const response = await fetch(`${BASE_URL}/api/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }

  return response.json();
}
