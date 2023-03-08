import { MapPoints } from "./mapPoints"
import { FormattedHTMLMessage } from '../../atoms/FormattedMessage/index'

export const ContactMain = () => {
	return (
		<section className='h-screen relative overflow-x-hidden'>
			<div className='absolute flex justify-center w-full top-[40%] lg:top-0 -left-12 lg:left-0 scale-150 lg:scale-100'>
				<img
					loading='lazy'
					src='/images/contact/contact-map.webp'
					alt='Map'
					className='w-[92%]'
				/>
				<MapPoints />
			</div>
			<div className='flex flex-col items-center mt-36 relative'>
				<h3 className='text-center mb-4 text-4xl-md-s lg:text-8xl font-bold tracking-02em uppercase'>
					<FormattedHTMLMessage id='page.contactUs.contactMain.title' />
				</h3>
				<h4 className='text-center text-2xl-m-s lg:text-4xl-h-s font-bold uppercase w-[60%]'>
					<FormattedHTMLMessage id='page.contactUs.contactMain.bigWord' />
				</h4>

				<div className='w-full flex flex-col items-center'>
					<div className='mt-48 lg:mt-20 w-full h-full flex justify-center'>
						<div className='blue-block mx-4 w-full lg:w-[22.5%] bg-blue-block border border-blue-hover flex flex-col items-center relative p-4'>
							<h5 className='lg:text-[22px] text-lg font-semibold font-lexendDeca'>
								<FormattedHTMLMessage id='app.navigation.careers' />
							</h5>
							<a className='my-2 text-base lg:text-xl-m tracking-04em font-lexendDeca' href='mailto:hr@platinum.fund'>
								hr@platinum.fund
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}