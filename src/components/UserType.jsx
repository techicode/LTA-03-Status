const TYPE_STYLE = {
  user: ['Usuario', 'bg-lime-500'],
  moderador: ['Moderador', 'bg-orange-500'],
  other: ['Otro', 'bg-slate-500'],
};

const UserType = ({ type }) => {
  const [typeName, typeStyle] = TYPE_STYLE[type] || TYPE_STYLE.other;

  return (
    <div className={`w-1/6 flex justify-center items-center`}>
      <span className={`px-4 rounded-lg ${typeStyle}`}>{typeName}</span>
    </div>
  );
};

export default UserType;
