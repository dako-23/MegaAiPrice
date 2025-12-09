📦 Mega AI Price Generator (MAIPG)

Mega AI Price Generator is a Tampermonkey automation script designed to streamline price generation and confirmation for automotive parts.
The tool uses an external backend API + OpenAI models to calculate realistic market prices based on Bulgarian automotive marketplaces.

With MAIPG you get:

⚡ Automatic price generation via AI

🧠 Market-based evaluation using BG sites (Krik, OLX, Bazar, auto salvages, etc.)

👀 Manual review before confirmation

🖱️ In-page UI buttons

🔄 Auto-update through GitHub

🧩 Modular code architecture (utils, fetching, pricing logic, buttons, styles)

🚀 Features
1️⃣ Automatic Price Generation

When clicking “Generate Prices”, the script:

Extracts all part descriptions from the product table

Sends them to your backend pricing API

Receives AI-based estimated market prices

Automatically fills the price input fields

2️⃣ Manual Price Confirmation

Once prices are generated, a second button — “Confirm Prices” — becomes active.

It:

Clicks all green confirm buttons

Counts how many prices were confirmed

Disables itself afterward until new prices are generated
