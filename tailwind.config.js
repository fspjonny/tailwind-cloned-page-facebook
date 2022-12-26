module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'face_book': {
          'face_background': '#f0f2f5',
          'face_btn_blue_normal': '#2b79ef',
          'face_btn_blue_hover': '#2871e2',
          'face_new_account_normal': '#34ba37',
          'face_new_account_hover': '#27a62d',
          'face_input': '#e8f0fd',
        }
      },
      spacing: {
        '30': '7.5rem',
        '290px': '290px',
        '396px': '396px',
        '500px': '500px',
        '980px': '980px',
      },
      fontSize: {
        'subtitle': '1.7rem',
        '20px': '20px',
      }
    },
  },
  plugins: [],
}
