import React from "react";
import "./Header.css";

function Header({ onToggleSection, activeSections }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
      />
      <div className="layout">
      <aside className="sidebar">
        <h1>Gestor de Tareas</h1>
        <nav className="sidebar_nav">
          <ul>
            <li className={`sidebar__item ${activeSections.includes("Tareas") ? "active" : ""}`} 
                onClick={() => onToggleSection("Tareas")}>
              <span className="material-symbols-outlined">event</span>
              <a href="#">Tareas</a>
            </li>
            <li className={`sidebar__item ${activeSections.includes("Resumen") ? "active" : ""}`} 
                onClick={() => onToggleSection("Resumen")}>
              <span className="material-symbols-outlined">format_list_bulleted</span>
              <a href="#">Resumen</a>
            </li>
            <li className={`sidebar__item ${activeSections.includes("Calendario") ? "active" : ""}`} 
                onClick={() => onToggleSection("Calendario")}>
              <span className="material-symbols-outlined">calendar_month</span>
              <a href="#">Calendario</a>
            </li>
          </ul>
        </nav>
        <div className="sidebar__profile">
          <ul>
            <li className="sidebar__item item--profile">
              <img src="https://via.placeholder.com/150" alt="Perfil"/>
              <span>Perfil</span>
            </li>
            <li className="sidebar__item">
              <span className="material-symbols-outlined">logout</span>
              <a href="#">Cerrar sesión</a>
            </li>
          </ul>
        </div>
      </aside>
      </div>
    </>
  );
}

export default Header;
