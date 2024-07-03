import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">Name</label>
          <Input id="name" {...register("name", { required: true })} />
          {errors.name && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">Email</label>
          <Input id="email" type="email" {...register("email", { required: true })} />
          {errors.email && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <label htmlFor="subject" className="block mb-2">Subject</label>
          <Input id="subject" {...register("subject", { required: true })} />
          {errors.subject && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <label htmlFor="message" className="block mb-2">Message</label>
          <Textarea id="message" {...register("message", { required: true })} />
          {errors.message && <span className="text-red-500">This field is required</span>}
        </div>
        <Button type="submit">Submit</Button>
      </form>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p>Email: contact@durbabagerhat.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Main Street, Bagerhat, Bangladesh</p>
      </div>
    </div>
  );
};

export default Contact;