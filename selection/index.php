<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("title", "Подбор моделей радиаторов Рифар Москва. +7 (495) 131-89-00.");
$APPLICATION->SetPageProperty("description", "Подбор модели радиаторов Rifar от интернет-магазина Рифар Москва. +7 (495) 131-89-00.");
$APPLICATION->SetTitle("Подбор моделей");?><script type="text/javascript" src="selection.js"></script>
<div class="selection-layout">
	 <!--slider-step-->
	<div>
		 <!--================STEP-START==================-->
		<div class="1">
			<h1 class="pagetitle absolute"><?$APPLICATION->ShowTitle(false)?></h1>
			<div class="step-start">
 <img src="img-carusel.png" class="fadeIn" alt="">
			</div>
			<div class="button-start">
				<a href="#" class="btn1 next" data-prev=".1" data-next=".2"> Начать подбор</a>
			</div>
			<ul id="mainNav" class="fiveStep">
				<li class="current">
				<p>
					Начало
				</p>
				</li>
				<li>
				<p>
					Климатические данные
				</p>
				</li>
				<li>
				<p>
					Система отопления
				</p>
				</li>
				<li>
				<p>
					Размеры помещения
				</p>
				</li>
				<li>
				<p>
					Состояние утепления <br>
					помещения
				</p>
				</li>
				<li class="mainNavNoBg">
				<p>
					Результат
				</p>
				</li>
			</ul>
			<div style="clear:both">
			</div>
		</div>
		 <!--================/STEP-START==================-->
		<form action="ajax-selection.php" name="SELECTION" method="POST">
			 <!--================STEP1==================-->
			<div class="step step-1 2">
				<h3>Шаг 1. «Климатические данные»</h3>
				<blockquote>
					Для определения особенностей отопительного периода необходимо задать климатические данные
				</blockquote>
				 <!--map-right-->
				<div class="map-right">
					 <!--------------------------------plan-sxema-floor1-------------------------------->
					<div id="map" name="map">
					</div>
					<div class="map_container3">
						<div class="map_sec1">
							<div class="popup">
								<div class="popup-top">
								</div>
								<div class="popup-center">
 <b>Дальневосточный ФО</b>
									<ul>
										<li><a href="javascript:;" data-id="405" data-value="1.00464">Владивосток</a></li>
										<li><a href="javascript:;" data-id="406" data-value="1.08016">Магадан</a></li>
										<li><a href="javascript:;" data-id="407" data-value="0.95036">Петропавловск-Камчатский</a></li>
										<li><a href="javascript:;" data-id="408" data-value="1.13208">Хабаровск</a></li>
										<li><a href="javascript:;" data-id="409" data-value="1.01408">Южно-Сахалинск</a></li>
										<li><a href="javascript:;" data-id="410" data-value="1.39876">Якутск</a></li>
									</ul>
								</div>
								<div class="popup-bot">
								</div>
							</div>
						</div>
						<div class="map_sec2">
							<div class="popup">
								<div class="popup-top">
								</div>
								<div class="popup-center">
 <b>Сибирский ФО</b>
									<ul>
										<li><a href="javascript:;" data-id="398" data-value="1.09432">Барнаул</a></li>
										<li><a href="javascript:;" data-id="399" data-value="1.1132">Иркутск</a></li>
										<li><a href="javascript:;" data-id="400" data-value="1.08016">Красноярск</a></li>
										<li><a href="javascript:;" data-id="401" data-value="1.11792">Новосибирск</a></li>
										<li><a href="javascript:;" data-id="402" data-value="1.11084">Омск</a></li>
										<li><a href="javascript:;" data-id="403" data-value="1.11084">Томск</a></li>
										<li><a href="javascript:;" data-id="404" data-value="1.18164">Чита</a></li>
									</ul>
								</div>
								<div class="popup-bot">
								</div>
							</div>
						</div>
						<div class="map_sec3">
							<div class="popup">
								<div class="popup-top">
								</div>
								<div class="popup-center">
 <b>Уральский ФО</b>
									<ul>
										<li><a href="javascript:;" data-id="393" data-value="1.0542">Екатеринбург</a></li>
										<li><a href="javascript:;" data-id="394" data-value="1.14624">Сургут</a></li>
										<li><a href="javascript:;" data-id="395" data-value="1.08252">Тюмень</a></li>
										<li><a href="javascript:;" data-id="396" data-value="1.12028">Ханты-Мансийск</a></li>
										<li><a href="javascript:;" data-id="397" data-value="1.066">Челябинск</a></li>
									</ul>
								</div>
								<div class="popup-bot">
								</div>
							</div>
						</div>
						<div class="map_sec4">
							<div class="popup">
								<div class="popup-top">
								</div>
								<div class="popup-center">
 <b>Северо-Западный ФО</b>
									<ul>
										<li><a href="javascript:;" data-id="308" data-value="0.95508">Санкт-Петербург</a></li>
										<li><a href="javascript:;" data-id="380" data-value="1.01644">Архангельск</a></li>
										<li><a href="javascript:;" data-id="381" data-value="0.88664">Калининград</a></li>
										<li><a href="javascript:;" data-id="382" data-value="0.98812">Мурманск</a></li>
										<li><a href="javascript:;" data-id="383" data-value="0.98576">Петрозаводск</a></li>
									</ul>
								</div>
								<div class="popup-bot">
								</div>
							</div>
						</div>
						<div class="map_sec5">
							<div class="popup">
								<div class="popup-top">
								</div>
								<div class="popup-center">
 <b>Приволжский ФО</b>
									<ul>
										<li><a href="javascript:;" data-id="384" data-value="1.04476">Ижевск</a></li>
										<li><a href="javascript:;" data-id="385" data-value="1.03532">Казань</a></li>
										<li><a href="javascript:;" data-id="386" data-value="1.00936">Нижний Новгород</a></li>
										<li><a href="javascript:;" data-id="387" data-value="1.06128">Оренбург</a></li>
										<li><a href="javascript:;" data-id="388" data-value="1.0188">Пенза</a></li>
										<li><a href="javascript:;" data-id="389" data-value="1.05184">Пермь</a></li>
										<li><a href="javascript:;" data-id="390" data-value="1.03532">Самара</a></li>
										<li><a href="javascript:;" data-id="391" data-value="1.05184">Уфа</a></li>
										<li><a href="javascript:;" data-id="392" data-value="1.02824">Чебоксары</a></li>
									</ul>
								</div>
								<div class="popup-bot">
								</div>
							</div>
						</div>
						<div class="map_sec6">
							<div class="popup">
								<div class="popup-top">
								</div>
								<div class="popup-center">
 <b>Центральный ФО</b>
									<ul>
										<li><a href="javascript:;" data-id="307" data-value="0.9126">Москва</a></li>
										<li><a href="javascript:;" data-id="372" data-value="0.98576">Воронеж</a></li>
										<li><a href="javascript:;" data-id="373" data-value="0.9834">Тверь</a></li>
										<li><a href="javascript:;" data-id="411" data-value="0.9126">Тула</a></li>
										<li><a href="javascript:;" data-id="374" data-value="1.007">Ярославль</a></li>
									</ul>
								</div>
								<div class="popup-bot">
								</div>
							</div>
						</div>
						<div class="map_sec7">
							<div class="popup">
								<div class="popup-top">
								</div>
								<div class="popup-center">
 <b>Южный ФО</b>
									<ul>
										<li><a href="javascript:;" data-id="375" data-value="0.94092">Астрахань</a></li>
										<li><a href="javascript:;" data-id="376" data-value="0.96924">Волгоград</a></li>
										<li><a href="javascript:;" data-id="377" data-value="0.8654">Краснодар</a></li>
										<li><a href="javascript:;" data-id="378" data-value="0.92676">Ростов-на-Дону</a></li>
										<li><a href="javascript:;" data-id="379" data-value="0.76156">Сочи</a></li>
									</ul>
								</div>
								<div class="popup-bot">
								</div>
							</div>
						</div>
 <img width="774" src="blank.gif" height="440" border="0" usemap="#map">
					</div>
					 <!--------------------------------/plan-sxema-floor1-------------------------------->
				</div>
				 <!--/map-right--> <!--climatic-data-->
				<div class="climatic-data">
					<div class="select-city">
 <span>Выберите ваш город:</span>
						<?/*style="max-height:215px; height:215px;"*/?>
					</div>
					<div class="data-city">
						<ul>
							<li> <b><span id="temperature">– 3,1</span> С°</b>
							<p>
								Средняя температура <br>
								отопительного периода
							</p>
 </li>
							<li> <b><span id="date">214</span> <sup>суток</sup></b>
							<p>
								Продолжительность отопительного периода
							</p>
 </li>
						</ul>
					</div>
				</div>
				 <!--/climatic-data-->
				<div class="buttons">
 <a href="#" type="submit" class="btn1 next" data-prev=".2" data-next=".3">Следующий шаг</a>
				</div>
				<ul id="mainNav" class="fiveStep">
					<li class="lastDone">
					<p>
						Начало
					</p>
					</li>
					<li class="current">
					<p>
						Климатические данные
					</p>
					</li>
					<li>
					<p>
						Система отопления
					</p>
					</li>
					<li>
					<p>
						Размеры помещения
					</p>
					</li>
					<li>
					<p>
						Состояние утепления <br>
						помещения
					</p>
					</li>
					<li class="mainNavNoBg">
					<p>
						Результат
					</p>
					</li>
				</ul>
			</div>
			 <!--================/STEP1==================--> <!--================STEP2==================-->
			<div class="step step-2 3">
				<h3>Шаг 2. «Система отопления»</h3>
				<blockquote>
					При выборе радиатора необходимо учитывать дополнительные возможности по эксплуатации, например, применение незамерзающих жидкостей
				</blockquote>
				<ul class="types">
					<li><a href="#" data-id="1">
					<div>
						<img alt="Индивидуальный дом" src="hom_small.png">
					</div>
 <span><span>Индивидуальный дом</span></span> <em>выбран «Индивидуальный дом»</em> </a></li>
					<li class="active"><a href="#" data-id="2">
					<div>
						<img alt="Многоквартирный дом" src="home_large.png">
					</div>
 <span><span>Многоквартирный дом</span></span> <em>выбран «Многоквартирный дом»</em> </a></li>
				</ul>
				<select name="FORM[TYPE]" id="type">
					<option value="1" data-id="1">Индивидуальный дом</option>
					<option value="2" data-id="2" selected="selected">Многоквартирный дом</option>
				</select>
				<div class="buttons step-2">
 <a href="#" type="submit" class="btn3 prev" data-prev=".3" data-next=".2">Назад</a>
					<?/*            <div class="error" style="position: absolute; left: 35%; margin-top: 11px;">«Выберите систему отопления»</div>*/?> <a href="#" type="submit" class="btn1 next" data-prev=".3" data-next=".4">Следующий шаг</a>
				</div>
				<ul id="mainNav" class="fiveStep">
					<li class="lastDone">
					<p>
						Начало
					</p>
					</li>
					<li class="lastDone">
					<p>
						Климатические данные
					</p>
					</li>
					<li class="current">
					<p>
						Система отопления
					</p>
					</li>
					<li>
					<p>
						Размеры помещения
					</p>
					</li>
					<li>
					<p>
						Состояние утепления <br>
						помещения
					</p>
					</li>
					<li class="mainNavNoBg">
					<p>
						Результат
					</p>
					</li>
				</ul>
			</div>
			 <!--================/STEP2==================--> <!--================STEP3==================-->
			<div class="step step-3 4">
				<h3>Шаг 3. «Размеры помещения»</h3>
				<div class="floor-space">
					 <!--right-col-->
					<div class="img-floor">
						<img src="img-floor.png" alt="">
					</div>
					 <!--/right-col--> <!--left-col-->
					<div class="data-floor">
						<blockquote>
							Задайте размеры помещения, используя его ширину<br>
							 и глубину или площадь
						</blockquote>
						<div class="table">
							<div>
								<table>
								<tbody>
								<tr>
									<td>
										Высота потолков, h
									</td>
									<td>
										<input name="FORM[H]" value="" type="text"><span>м.</span>
									</td>
								</tr>
								<tr>
									<td>
										Ширина помещения, a
									</td>
									<td>
										<input name="FORM[A]" value="" type="text"><span>м.</span>
									</td>
								</tr>
								<tr>
									<td>
										Глубина помещения, b
									</td>
									<td>
										<input name="FORM[B]" value="" type="text"><span>м.</span>
									</td>
								</tr>
								<tr>
									<td>
										Площадь, S
									</td>
									<td>
										<input name="FORM[S]" value="" type="text"><span>м<sup>2</sup></span>
									</td>
								</tr>
								<tr>
									<td>
										Высота подоконника, h1
									</td>
									<td>
										<input name="FORM[H1]" value="" type="text"><span>м.</span>
									</td>
								</tr>
								</tbody>
								</table>
							</div>
						</div>
					</div>
					 <!--/left-col-->
				</div>
				<div class="buttons">
 <a href="#" class="btn3 prev" data-prev=".4" data-next=".3">Назад</a> <a href="#" class="next btn1 submit-size" data-prev=".4" data-next=".5">Следующий шаг</a>
					<div class="error">
						«Проверьте введенные значения, либо ваши параметры превышают допустимые ограничения»
					</div>
					<div class="error_area">
						«Проверьте введенные данные. Площадь отличается от произведения сторон.»
					</div>
				</div>
				<ul id="mainNav" class="fiveStep">
					<li class="lastDone">
					<p>
						Начало
					</p>
					</li>
					<li class="lastDone">
					<p>
						Климатические данные
					</p>
					</li>
					<li class="lastDone">
					<p>
						Система отопления
					</p>
					</li>
					<li class="current">
					<p>
						Размеры помещения
					</p>
					</li>
					<li>
					<p>
						Состояние утепления <br>
						помещения
					</p>
					</li>
					<li class="mainNavNoBg">
					<p>
						Результат
					</p>
					</li>
				</ul>
			</div>
			 <!--================/STEP3==================--> <!--================STEP4==================-->
			<div class="step step-4 5">
				<div class="clearfix">
					<h3>Шаг 4. «Состояние утепления помещения»</h3>
					<div class="state-space">
						 <!--col-right-->
						<div class="img-space">
							<img src="img-space.png" alt="">
						</div>
						 <!--/col-right--> <!--col-left-->
						<div class="data-state-space">
							<blockquote>
								Тепло в доме во многом зависит от того,<br>
								 насколько хорошо утеплено помещение
							</blockquote>
							<div>
 <span>Категория утепления помещения</span>
								<select name="FORM[K1]">
									<option value="1.05">Низкая</option>
									<option value="0.98">Средняя</option>
									<option value="0.963">Высокая</option>
								</select>
							</div>
							<div>
 <span>Состояние окон</span>
								<select name="FORM[K2]">
									<option value="1.05">Плохое</option>
									<option value="1">Удовлетворительное</option>
									<option value="0.98">Хорошее</option>
									<option value="0.963">Отличное</option>
								</select>
							</div>
						</div>
						 <!--/col-left-->
					</div>
				</div>
				<div class="buttons">
 <a href="#" class="btn3 prev" data-prev=".5" data-next=".4">Назад</a> <a href="#" class="next btn1 submit-form" data-prev=".5" data-next=".6">Следующий шаг</a>
					<?/*          <div class="error_area">«Проверьте введенные данные. Площадь отличается от произведения сторон.»</div>*/?>
				</div>
				<ul id="mainNav" class="fiveStep">
					<li class="lastDone">
					<p>
						Начало
					</p>
					</li>
					<li class="lastDone">
					<p>
						Климатические данные
					</p>
					</li>
					<li class="lastDone">
					<p>
						Система отопления
					</p>
					</li>
					<li class="lastDone">
					<p>
						Размеры помещения
					</p>
					</li>
					<li class="current">
					<p>
						Состояние утепления <br>
						помещения
					</p>
					</li>
					<li class="mainNavNoBg">
					<p>
						Результат
					</p>
					</li>
				</ul>
			</div>
		</form>
		 <!--================/STEP4==================--> <!--================STEP5==================-->
		<div class="step step-5 6">
			<div>
				<h3>Шаг 5. «Результат»</h3>
 <strong>Вам подходят:</strong>
				<div class="contaner-filter-selection">
				</div>
			</div>
			<div class="buttons">
 <a href="#" class="prev btn3" data-prev=".6" data-next=".5">Назад</a> <a href="#" class="next submit-res btn1" data-prev=".6" data-next=".7">Следующий шаг</a>
				<div class="error_area">
					«Проверьте введенные данные. Площадь отличается от произведения сторон.»
				</div>
			</div>
			<ul id="mainNav" class="fiveStep">
				<li class="lastDone">
				<p>
					Начало
				</p>
				</li>
				<li class="lastDone">
				<p>
					Климатические данные
				</p>
				</li>
				<li class="lastDone">
				<p>
					Система отопления
				</p>
				</li>
				<li class="lastDone">
				<p>
					Размеры помещения
				</p>
				</li>
				<li class="lastDone">
				<p>
					Состояние утепления <br>
					помещения
				</p>
				</li>
				<li class="mainNavNoBg current">
				<p>
					Результат
				</p>
				</li>
			</ul>
		</div>
		 <!--================/STEP5==================--> <!--================STEP6==================-->
		<div class="step step-6 7">
			<div>
				<h3>Шаг 6. «Результат»</h3>
				<div class="total-box">
					 <!--col-left-->
					<div class="col-left">
						<ul>
							<li> <b>Модель радиатора:</b><br>
 <span id="res_NAME">-</span>
							<p>
								<a id="res_URL" target="_blank" href="#">Подробнее о модели</a>
							</p>
 </li>
							<li> <b>Радиаторов:</b> <span id="res_M">0</span> шт. </li>
							<li> <b>Необходимое количество секций:</b> <span id="res_N">0</span> шт. </li>
						</ul>
						 <?/*<a href="/selection_page/?print=Y" target="_blank" class="button-print">Распечатать</a>*/?>
					</div>
					 <!--/col-left--> <!--col-center-->
					<div class="col-center">
						<img src="img8.png" id="res_IMG" alt="">
					</div>
					 <!--/col-center--> <!--col-right-->
					<div class="col-right">
						<ul>
							<li>Объект отопления: <span id="res_TYPE">-</span></li>
							<li>
							Размер помещения
							<ul>
								<li>Высота: <span id="res_H">0</span> м.</li>
								<li>Ширина: <span id="res_A">0</span> м.</li>
								<li>Глубина : <span id="res_B">0</span> м.</li>
							</ul>
 </li>
							<li>Высота от пола до подоконника: <span id="res_H1">0</span> м</li>
							<li>
							Состояние утепления помещения
							<ul>
								<li>Категория утепления помещения: <span id="res_K1">-</span></li>
								<li>Состояние окон: <span id="res_K2">-</span></li>
							</ul>
 </li>
						</ul>
						<ul>
							<li> Внимание! «Подбор модели» является приблизительным и служит лишь в ознакомительных целях, так как не учитывает индивидуальные особенности вашего помещения и организации системы отопления. Для точного расчета следует обратиться к специалисту в области отопления.</li>
						</ul>
					</div>
					 <!--/col-right-->
				</div>
			</div>
			<div class="buttons">
 <a href="#" class="prev btn3" data-prev=".7" data-next=".6">Назад</a>
			</div>
		</div>
		 <!--================/STEP6==================-->
	</div>
	 <!--/slider-step-->
</div><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>