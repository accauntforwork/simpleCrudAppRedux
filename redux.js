// 1. Redux yordamida foydalanuvchilar ro'yxatini boshqarish uchun amallar turlarini aniqlaymiz
const LOAD_USERS = "LOAD_USERS";
const ADD_USER = "ADD_USER";
const DELETE_USER = "DELETE_USER";
const UPDATE_USER = "UPDATE_USER";

// 2. Reducer funktsiyalari
const initialState = {
  users: [], // Boshlang'ich foydalanuvchilar ro'yxati bo'sh o'zgaruvchisi
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        users: action.payload, // Yuklangan foydalanuvchilar ro'yxatini saqlash
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload], // Foydalanuvchi qo'shish
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload), // Foydalanuvchini o'chirish
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map(
          (user) => (user.id === action.payload.id ? action.payload : user) // Foydalanuvchi ma'lumotlarini yangilash
        ),
      };
    default:
      return state;
  }
}

// 3. Redux store yaratish
const { createStore } = Redux;
const store = createStore(userReducer);

// 4. Redux store dan ma'lumotlarni olish
console.log(store.getState()); // Boshlang'ich foydalanuvchilar ro'yxati: []

// 5. Redux store ga ma'lumot qo'shish
store.dispatch({
  type: ADD_USER,
  payload: { id: 1, name: "John", age: 30 },
});

// 6. Redux store dan yangilangan ma'lumotlarni olish
console.log(store.getState()); // Yangilangan foydalanuvchilar ro'yxati: [{ id: 1, name: 'John', age: 30 }]
