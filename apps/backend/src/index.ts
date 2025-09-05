import express from "express";
import cors, { CorsOptions } from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(helmet()); // Zabezpieczenia

// Konfiguracja CORS z ograniczeniami bezpieczeństwa
const corsOptions: CorsOptions = {
  origin: ["http://localhost:3000", "http://localhost:3001"],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Backend is running!",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/posts", (req, res) => {
  res.json([
    { id: 1, title: "First Post", content: "Hello World!" },
    { id: 2, title: "Second Post", content: "Instagram clone backend" },
  ]);
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handler
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
  }
);

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
});
