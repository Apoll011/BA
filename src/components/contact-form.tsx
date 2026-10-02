"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CtaLink } from "@/components/cta-link";
import { atelier } from "@/lib/site";

type Values = {
  nome: string;
  telefone: string;
  email: string;
  mensagem: string;
};

type Errors = Partial<Record<keyof Values, string>>;

const empty: Values = { nome: "", telefone: "", email: "", mensagem: "" };

function validPhone(value: string) {
  const compact = value.replace(/[\s()-]/g, "");
  return /^(\+351)?[29]\d{8}$/.test(compact);
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (values.nome.trim().length < 2) errors.nome = "Indique o nome.";
  if (!validPhone(values.telefone)) {
    errors.telefone = "Indique um telefone português válido, com ou sem +351.";
  }
  if (!validEmail(values.email)) errors.email = "Indique um email válido.";
  if (values.mensagem.trim().length < 10) {
    errors.mensagem = "Escreva uma mensagem com pelo menos 10 caracteres.";
  }
  return errors;
}

const fieldClass = "h-11 rounded-xl bg-white px-3";

export function ContactForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setDone(true);
  }

  if (done) {
    const subject = encodeURIComponent("Pedido de marcação — BA");
    const body = encodeURIComponent(
      `Nome: ${values.nome.trim()}\nTelefone: ${values.telefone.trim()}\nEmail: ${values.email.trim()}\n\n${values.mensagem.trim()}`,
    );
    const mailto = `mailto:${atelier.email}?subject=${subject}&body=${body}`;

    return (
      <div className="rounded-3xl border border-royal/30 bg-white p-6 sm:p-8" role="status">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-royal">Pedido preparado</p>
        <h2 className="mt-3 text-4xl text-onyx">O texto ficou pronto neste ecrã.</h2>
        <p className="mt-4 max-w-prose text-sm leading-relaxed text-onyx/75">
          Não há servidor por trás do formulário. Envie o pedido por email ou ligue para o atelier confirmar a vaga.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaLink href={mailto}>Enviar por email</CtaLink>
          <CtaLink href={`tel:${atelier.phoneTel}`} tone="line">
            Ligar
          </CtaLink>
          <Button
            type="button"
            variant="outline"
            className="h-12 rounded-full px-6 font-mono text-[0.68rem] uppercase tracking-[0.18em]"
            onClick={() => {
              setDone(false);
              setValues(empty);
            }}
          >
            Escrever outro
          </Button>
        </div>
      </div>
    );
  }

  const errorList = Object.values(errors).filter(Boolean);

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-onyx/10 bg-alabaster/60 p-6 sm:p-8">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-royal">Pedido</p>
      <h2 className="mt-3 text-4xl text-onyx">Marcar uma vaga</h2>
      <p className="mt-3 text-sm text-onyx/70">Todos os campos são obrigatórios.</p>
      {errorList.length > 0 ? (
        <div className="mt-5 rounded-2xl border border-destructive/30 bg-white px-4 py-3 text-sm text-destructive" role="alert">
          <p>Revise os campos assinalados antes de continuar.</p>
        </div>
      ) : null}
      <div className="mt-6 grid gap-5">
        <Field
          id="nome"
          label="Nome"
          error={errors.nome}
          control={
            <Input
              id="nome"
              name="nome"
              autoComplete="name"
              value={values.nome}
              aria-invalid={Boolean(errors.nome)}
              aria-describedby={errors.nome ? "nome-erro" : undefined}
              className={fieldClass}
              onChange={(event) => update("nome", event.target.value)}
            />
          }
        />
        <Field
          id="telefone"
          label="Telefone"
          error={errors.telefone}
          control={
            <Input
              id="telefone"
              name="telefone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="91 000 0000"
              value={values.telefone}
              aria-invalid={Boolean(errors.telefone)}
              aria-describedby={errors.telefone ? "telefone-erro" : undefined}
              className={fieldClass}
              onChange={(event) => update("telefone", event.target.value)}
            />
          }
        />
        <Field
          id="email"
          label="Email"
          error={errors.email}
          control={
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="nome@exemplo.pt"
              value={values.email}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-erro" : undefined}
              className={fieldClass}
              onChange={(event) => update("email", event.target.value)}
            />
          }
        />
        <Field
          id="mensagem"
          label="Mensagem"
          error={errors.mensagem}
          control={
            <Textarea
              id="mensagem"
              name="mensagem"
              rows={5}
              placeholder="Lavagem detalhada para um Série 3, de manhã."
              value={values.mensagem}
              aria-invalid={Boolean(errors.mensagem)}
              aria-describedby={errors.mensagem ? "mensagem-erro" : undefined}
              className="min-h-32 rounded-xl bg-white px-3 py-3"
              onChange={(event) => update("mensagem", event.target.value)}
            />
          }
        />
      </div>
      <Button
        type="submit"
        className="mt-6 h-12 rounded-full bg-royal px-6 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white hover:bg-royal/90"
      >
        Preparar pedido
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  control,
}: {
  id: string;
  label: string;
  error?: string;
  control: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id} className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-onyx/70">
        {label}
      </Label>
      {control}
      {error ? (
        <p id={`${id}-erro`} className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
