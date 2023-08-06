import React from "react";

// Функциональный компонент для пользовательской панели инструментов календаря
const CustomToolbar = ({ onNavigate, label }) => {
  // Переход к следующему/предыдущему месяцу или текущему дню
  const navigate = (action) => {
    onNavigate(action);
  };

  return (
    <div className="rbc-toolbar">
      <span className="custom-nav">
        {/* Кнопка для перехода к предыдущему месяцу */}
        <button onClick={() => navigate("PREV")}>{"<"}</button>

        {/* Отображение текущего месяца */}
        <span className="current-month-label">{label}</span>

        {/* Кнопка для перехода к следующему месяцу */}
        <button onClick={() => navigate("NEXT")}>{">"}</button>

        {/* Кнопка для возвращения к текущему дню */}
        <button onClick={() => navigate("TODAY")} className="custom-today-btn">
          {"Today"}
        </button>
      </span>
    </div>
  );
};

export default CustomToolbar;
