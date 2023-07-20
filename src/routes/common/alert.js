import React from "react";

/** Presentational component for showing bootstrap-style alerts.
 *
 * { LoginForm, SignupForm, ProfileForm } -> Alert
 **/

function Alert({ messages = [] }) {
  return (
    <div role="alert">
      {messages.map((error) => (
        <p className="mb-0 small" key={error}>
          {error}
        </p>
      ))}
    </div>
  );
}

export default Alert;
