"use client";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ChatWindowMessage } from '@/schema/ChatWindowMessage';

import { useState, type FormEvent } from "react";
import { Client } from 'langsmith';

export function ChatMessageBubble(props: { message: ChatWindowMessage, aiEmoji?: string }) {
  const { role, content, runId } = props.message;

  const alignmentClassName =
    role === "human" ? "chat-end" : "chat-start";
  const prefix = role === "human" ? "🧑" : props.aiEmoji;

  const [isLoading, setIsLoading] = useState(false);
  // const [feedback, setFeedback] = useState<Client | null>(null);
  const [comment, setComment] = useState("");
  const [showCommentForm, setShowCommentForm] = useState(false);
  return (
    <div
      className={`chat ${alignmentClassName} rounded px-4 py-2 max-w-[80%] mb-8 flex flex-col`}
    >
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">{prefix}</div>
      </div>
      <div className="chat-bubble">
        <div className="whitespace-pre-wrap">
          {content.trim()}
        </div>
      </div>
    </div>
  );
}