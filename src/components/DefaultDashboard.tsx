import { FC, useState } from "react";
import { Bell, Mail, UserCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const DefaultDashboard: FC = () => {
  const [resendingEmail, setResendingEmail] = useState(false);

  const handleResendEmail = async () => {
    setResendingEmail(true);
    // TODO: Implement resend verification email logic
    setTimeout(() => setResendingEmail(false), 2000);
  };
  return (
    <div className="container mx-auto p-6  ">
      {/* Verification Alert */}
      <Alert className="mb-6 dark:border-amber-500/20 dark:bg-amber-500/10 border-amber-500 bg-amber-50">
        <Mail className="h-4 w-4" />
        <AlertTitle>Please verify your email address</AlertTitle>
        <AlertDescription className="mt-2 flex items-center justify-between">
          <span>
            Check your inbox for the verification link to unlock all features.
          </span>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleResendEmail}
              disabled={resendingEmail}
              className="dark:bg-background"
            >
              {resendingEmail ? "Sending..." : "Verify Email"}
            </Button>
            <Button
              variant="outline"
              onClick={handleResendEmail}
              disabled={resendingEmail}
              className="dark:bg-background"
            >
              {resendingEmail ? "Sending..." : "Resend Email"}
            </Button>
          </div>
        </AlertDescription>
      </Alert>

      {/* Welcome Message */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome to RSVP App! 👋
        </h1>
        <p className="text-muted-foreground mt-2">
          Let's get you started with managing your events.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card className="dark:border-muted/20">
          <CardHeader>
            <CardTitle>Create Event</CardTitle>
            <CardDescription>
              Start planning your next gathering
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" disabled>
              New Event
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              ⚠️ Verify email to unlock
            </p>
          </CardContent>
        </Card>

        <Card className="dark:border-muted/20">
          <CardHeader>
            <CardTitle>Complete Profile</CardTitle>
            <CardDescription>Add your details to get started</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="secondary" className="w-full">
              <UserCircle className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        <Card className="dark:border-muted/20">
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>Customize your preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="secondary" className="w-full">
              <Bell className="mr-2 h-4 w-4" />
              Configure
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Feature Preview */}
      <Card className="dark:border-muted/20">
        <CardHeader>
          <CardTitle>What you'll be able to do after verification</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center text-muted-foreground">
              <span className="mr-2">✨</span>
              Create and manage events
            </li>
            <li className="flex items-center text-muted-foreground">
              <span className="mr-2">✨</span>
              Send invitations to guests
            </li>
            <li className="flex items-center text-muted-foreground">
              <span className="mr-2">✨</span>
              Track RSVPs and responses
            </li>
            <li className="flex items-center text-muted-foreground">
              <span className="mr-2">✨</span>
              Manage guest lists and details
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
