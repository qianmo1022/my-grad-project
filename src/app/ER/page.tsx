'use client';

import MatchForm from "@/ui/match-form";
import { ProtectedRoute } from "@/components/protected-route";

export default function Page() {
  return (
    <ProtectedRoute>
      <div className="flex">
        <h1 className="text-3xl font-bold">This is ER Page</h1>
        <div className="flex flex-col mx-8">
          <MatchForm />
        </div>
      </div>
    </ProtectedRoute>
  );
}
