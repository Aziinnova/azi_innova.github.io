    function generateKey() {
      const keyLength = 16; // Change the key length as needed
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let key = '';

      for (let i = 0; i < keyLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        key += characters.charAt(randomIndex);
      }

      document.getElementById('keyDisplay').value = key;
    }
