import uuidv4 from "uuid/v4";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.send(req.context.models.messages);
});

router.get("/:messageId", (req, res) => {
  return res.send(req.context.models.messages[req.params.messageId]);
});

router.post("/", (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.context.me.id
  };

  req.context.models.messages[id] = message;

  return res.send(message);
});

router.delete("/:messageId", (req, res) => {
  const {
    [req.params.messageId]: message,
    ...otherMessages
  } = req.context.models.message;

  req.context.models.message = otherMessages;

  return res.send(message);
});

export default router;
