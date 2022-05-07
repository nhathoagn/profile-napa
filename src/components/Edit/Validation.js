import "react-toastify/dist/ReactToastify.css";

export const emailValidator = (control) => {
    // RFC 2822 compliant regex
    let email_regex = (/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
    if (email_regex.test(control)) {
      return null;
    } else {
      return 'Email không đúng.';
    }
  }

  export const passwordValidator = (control) => {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    let password_regex = (/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/);
    if (password_regex.test(control)) {
      return null;
    } else {
      return 'Mật khẩu phải 6 kí tự và chưa số.';
    }
  }

  export const numberValidator = (control) => {
    let phone_regex = (/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/);
    if (phone_regex.test(control)) {
      return "";
    } else {
      return 'Bạn phải nhập số.';
    }
  }

  export const passwordMatch = (control) => {
    const parent = control.parent;
    if (parent) {
      const password = parent.get('password').value;
      const confirmPassword = control.value;

      if (password !== confirmPassword) {
        return 'Hai mật khẩu phải giống nhau.';
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  export const requireValue = (control) => {
    let require_regex = (/^[A-Za-z]+$/i );
    if (require_regex.test(control) || control !== '' ) {
      return null;
    } else {
      return 'Chưa nhập thông tin.';
    }
  }    

  export const requireUncontainNumber = (control) => {
    let require_regex = (/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/);
    if (require_regex.test(control) === true ) {
      return 'Không được chứa số.';
    } else {
      return null;
    }
  } 