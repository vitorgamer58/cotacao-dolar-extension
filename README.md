# Cotação Dólar Extension

A simple Chrome extension that displays the **Dollar to Real** exchange rate, sourced directly from the **USDT/BRL pair on Binance**. This extension was created as a response to the unexpected removal of real-time Dollar exchange rate information from Google’s search results in late December 2024.

## Motivation

Towards the end of 2024, the Dollar experienced a sharp rise in relation to the Brazilian Real. On December 25, 2024 (a public holiday), Google briefly showed an unusually high exchange rate for the Real against the Dollar. Shortly afterward:

- Google **suspended the display of the Real exchange rate** in relation to other currencies.
- A lawsuit from the Attorney General's Office of the Federal Union of Brazil (case number **00405162030202431**, access code **c53b52b1**) was filed, leading to an official letter sent on December 26, 2024, to Google’s General Director in Brazil about inconsistencies in the displayed exchange rate.
- There is widespread speculation that Google was **informally pressured** to halt displaying Dollar exchange rates, allegedly to **mask the Real’s devaluation**.

In response to this climate of uncertainty, **Cotação Dólar Extension** was developed. It aims to provide an **independent, reliable** source for the Dollar-to-Real exchange rate—helping users stay informed despite any external pressures or data suppression.

---

## Features

- **Real-Time Display**: Shows the current Dollar to Real exchange rate.
- **Reliable Data**: Fetches data from the **USDT/BRL pair on Binance**, which updates continuously.
- **Lightweight & Fast**: Minimal overhead, ensuring quick updates without slowing down your browser.

---

## Data Source

All exchange rate information is fetched from the **USDT/BRL** trading pair on [Binance](https://www.binance.com/). This provides a **near real-time** market rate for the Dollar against the Brazilian Real.

---

## Installation & Usage

1. **Download or Clone** this repository.
2. **Build** the extension (see [Project Setup](#project-setup-development) below).
3. **Load the Extension in Chrome**
   - Open `chrome://extensions` in your browser.
   - Enable **Developer Mode** (toggle in the upper right corner).
   - Click **Load unpacked** and select the folder containing the built project.

Once loaded, you’ll see the extension icon in your Chrome toolbar. Click on it to view the current exchange rate any time.

---

## Project Setup (Development)

To work on this extension or customize it further, follow these steps:

1. **Install Dependencies**:

   ```sh
   npm install
   ```

2. **Compile and Hot-Reload for Development**:

   ```sh
   npm run dev
   ```

3. **Type-Check, Compile and Minify for Production**:

   ```sh
   npm run build
   ```

4. **Run Unit Tests with [Vitest](https://vitest.dev/)**:

   ```sh
   npm run test:unit
   ```

5. **Lint with [ESLint](https://eslint.org/)**:
   ```sh
   npm run lint
   ```

---

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)

Using Volar ensures the TypeScript language service is properly aware of `.vue` types.

---

## Type Support for `.vue` Imports in TS

TypeScript does not handle type information for `.vue` imports by default. This project replaces the `tsc` CLI with `vue-tsc` for type checking. In your editor (e.g., VSCode), use [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) instead of Vetur for the best experience.

---

## Customize Configuration

See [Vite Configuration Reference](https://vite.dev/config/) for more details on configuring and customizing your Vite-based setup.

---

### Disclaimer

This project is **not** affiliated with Google, Binance, or any governmental entity. All exchange rate data is provided **as-is** for informational purposes.
