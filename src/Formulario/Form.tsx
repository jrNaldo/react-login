import { useContext } from "react";
import { FaCode, FaEye, FaEyeSlash, FaMailBulk, FaMoon, FaSun, FaUser } from "react-icons/fa";
import Container from "../layout/Container";
import { ThemeContext } from "../context/ThemeContext";
import { useForm } from "react-hook-form";
import type { FormType } from "../types/FormType";
import Input from "../layout/Input";
import usePassWord from "../customHooks/togglePassword";
import ShowError from "../layout/showError";

export default function Form() {
    const {register,handleSubmit, formState: {errors}, reset} = useForm<FormType>()
    const {password, tooglePassword} = usePassWord()
    const {theme, toogleTheme} = useContext(ThemeContext)

    const onSubmit = (data: FormType) => {
        alert(`Seja bem vindo, ${data.name}!`)
        reset()
    }

    return (
        <div 
            className={`
                ${theme === 'dark' ? 'backdrop-blur-2xl text-white': 'bg-neutral-200 text-black'}  
                w-[80vw] max-w-200 rounded-2xl p-8  box-border
            `}
        >
            <form action='' onSubmit={handleSubmit(onSubmit)}>
                
                <Container>
                    <h1 className="text-2xl py-4">Acesse o sistema</h1>

                    {theme === 'dark' ? 
                        <FaMoon onClick={toogleTheme} className="cursor-pointer"/> : 
                        <FaSun onClick={toogleTheme} className="cursor-pointer"/>
                    }

                </Container>

                <Container>
                    <Input
                        type="text" 
                        placeholder="Nome"
                        {...register('name', {required: true})}
                        minLength={4}
                        maxLength={30}

                    />
                    <FaUser />
                </Container>
                
                {errors?.name?.type === 'required' && <ShowError text='* Obrigatório'/>}

                <Container>
                    <Input
                        type="email" 
                        placeholder="E-mail"
                        {...register('email', {required: true})}
                        minLength={8}
                        maxLength={30}
                        />
                    <FaMailBulk />
                </Container>

                {errors?.email?.type === 'required' && <ShowError text='* Obrigatório'/>}

                <Container>
                    <Input
                        type={password ? 'text': 'password'}
                        placeholder="Senha"
                        {...register('password', {required: true, minLength: 8})}
                        maxLength={15}
                        />

                    {password ? 
                        <FaEye onClick={tooglePassword} className="cursor-pointer"/>:
                        <FaEyeSlash onClick={tooglePassword} className="cursor-pointer"/>
                    }

                </Container>
                
                {errors?.password?.type === 'required' && <ShowError text='* Obrigatório'/>}
                {errors?.password?.type === 'minLength' && <ShowError text="A senha deve conter mais de 8 caracteres" />}

                <Container>
                    <select 
                        id="minhaProfissao" 
                        className={`grow border rounded-2xl p-2  ${theme === 'dark' ? 'bg-gray-800': 'bg-neutral-200'}`}
                        {...register('profession', {validate: (v) => v !== 'select'})}
                        >
                        <option value="select" hidden>Seleciona uma Profissão</option>
                        <option value="Desenvolvedor">Desenvolvedor</option>
                        <option value="Engenheiro de software">Engenheiro de software</option>
                        <option value="FullStack">Full-Stack</option>
                    </select>

                    <FaCode></FaCode>
                </Container>

                {errors?.profession?.type === 'validate' && <ShowError text="Selecione uma profissão"/>}

                <div>
                    <label className="flex items-center gap-2 text-xs md:text-base mt-2">
                        <input 
                            type="checkbox" 
                            className="mt-0.5 cursor-pointer"
                            {...register('acceptTerms', {required: true})}
                        />
                        Eu aceito os termos e condições
                    </label>
                </div>
                {errors?.acceptTerms?.type === 'required' && <ShowError text="Concorde com os termos e condições"/>}

                <button 
                    className={`text-white py-2 px-4 rounded border w-full cursor-pointer my-3 transition-all
                        ${theme === 'dark' ? 
                            'bg-amber-500 hover:bg-red-100 hover:text-amber-950 ': 
                            'bg-amber-900 hover:bg-amber-800'
                        }
                    `}
                >
                    Entrar
                </button>
            </form>
        </div>
    )
}

