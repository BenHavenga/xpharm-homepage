"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { ArrowRight } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "104b8572-7851-4be6-a56d-d394a8a69a0d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        throw new Error(data.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-primary-foreground rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-primary mb-3 font-serif">
          Got it.
        </h3>
        <p className="text-muted-foreground text-lg">
          We'll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-primary-foreground rounded-2xl p-8 md:p-10 text-left space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-primary font-medium">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-accent rounded-xl h-12"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-primary font-medium">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-accent rounded-xl h-12"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="company" className="text-primary font-medium">
          Company{" "}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </Label>
        <Input
          id="company"
          name="company"
          placeholder="Your organisation"
          className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-accent rounded-xl h-12"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-primary font-medium">
          What are you working on?
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your project or challenge..."
          rows={5}
          className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-accent resize-none rounded-xl"
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 h-12 rounded-xl text-base group"
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <span className="flex items-center justify-center gap-2">
            Send Message
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        )}
      </Button>
    </form>
  );
}
