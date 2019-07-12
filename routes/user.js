import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.send(Object.values(req.context.models.users));
});

router.get("/:userId", (req, res) => {
  return res.send(req.models.context.users[req.params.userId]);
});

export default router;
