import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const HomePage: React.FC = () => {
  return (
    <main className="flex-grow container mx-auto px-4 py-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-foreground">
          Create any event in minutes.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Automate event management, from invite to check-in.
        </p>
        <Button asChild className="mt-8">
          <Link to="/register">Get started for free</Link>
        </Button>
      </section>

      <section id="features" className="mt-16">
        <h2 className="text-2xl font-bold text-foreground mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">Customize</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Take complete control of invites, registration, check-in, and
                more with RSVP. Tailor to your brand or style.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">Control</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Quickly create a custom event registration experience with RSVP
                with features like multi-part events, custom tags, custom
                questions, and more.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">Automate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Streamline event planning and guest communications. Track and
                report in real-time. Scale your events.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
