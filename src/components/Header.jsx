import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
      />
      <div class="layout">
      <aside class="sidebar">
        <h1>Gestor de Tareas</h1>
        <nav class="sidebar_nav">
          <ul>
            <li class="sidebar__item">
              <span class="material-symbols-outlined">Notifications</span>
              <a href="#">Notifications</a>
            </li>
            <li class="sidebar__item">
              <span class="material-symbols-outlined">Mail</span>
              <a href="#">Mensajes</a>
            </li>
            <li class="sidebar__item">
              <span class="material-symbols-outlined">Shopping_cart</span>
              <a href="#">Carrito</a>
            </li>
            <li class="sidebar__item">
              <span class="material-symbols-outlined">Account_balance</span>
              <a href="#">Account balance</a>
            </li>
            <li class="sidebar__item">
              <span class="material-symbols-outlined">Settings</span>
              <a href="#">Configuracion</a>
            </li>
          </ul>
        </nav>
        <div class="sidebar__profile">
          <ul>
            <li class="sidebar__item item--profile">
              <img
                src="https://via.placeholder.com/150"
              />
              <span>Perfil</span>
            </li>
            <li class="sidebar__item">
              <span class="material-symbols-outlined">logout</span>
              <a href="#">Cerrar sesion</a>
            </li>
          </ul>
        </div>
      </aside>
      </div>
    </>
  );
}


export default Header;