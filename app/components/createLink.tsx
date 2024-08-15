import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {useState, FormEvent} from "react"
import { handleCreateShortenLink } from "@/app/lib/action"

 
export default function CreateLink() {
  const [form, setForm] = useState({ name: "", link: "", customize: ""})
    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget
        setForm((prev) => ({...prev, [name]: value}))
    }
    const createShortLink = async (e: FormEvent) => {
      e.preventDefault();
      // setLoading(true);
      try {
          await handleCreateShortenLink(form.name, form.link);
          // router.push("/dashboard/links");
      } catch (error) {
          console.error("Error creating link", error);
          // setError(error);
          // setLoading(false);
          // setTimeout(() => {
          //     setError(null);
          // }, 5000);
      }
  };
  return (
    <Dialog>
      <DialogTrigger>
        <div>Shorten New Link</div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader >
          <DialogTitle className="text-center">Create a new shortened link</DialogTitle>
        </DialogHeader>
        <form action="" >
                    <div className="mt-2" >
                        <label htmlFor="Name">Name of your Link</label>
                        <Input 
                        name="name"
                        type="text" 
                        placeholder="snip's getTogether" 
                        value={form.name}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="mt-6">
                        <label htmlFor="Link">Enter your Link</label>
                        <Input 
                        name="link"
                        type="text" 
                        placeholder="sample.com" 
                        value={form.link}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="mt-6">
                        <label htmlFor="Customize">Customize your Link(optional)</label>
                        <Input 
                        name="customize"
                        type="text" 
                        placeholder="Customize your link" 
                        // value={form.customize}
                        // onChange={handleChange}
                        />
                    </div>
                    {/* {error && <p className="text-red-500 font-bold text-center text-sm mt-4">{error.message}</p>}
                    <div className="mt-6 text-center">
                        <Button className="font-bold w-full font-semibold" disabled={loading} onClick={createShortLink}>{loading? "Creating Link..." : "Create Link"}</Button>
                    </div> */}
                </form>
         <div className="flex justify-between"> 
          <DialogClose>
        Cancel
        </DialogClose>
          <Button onClick={createShortLink}className="bg-blue-900" type="submit">Create</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}